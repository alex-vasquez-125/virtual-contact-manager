import { Component, OnInit } from '@angular/core';
import { Contact } from '../../pojos/contact';
import { ContactService } from '../../services/contact.service';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';
import { DatabaseResultDialogComponent } from '../database-result-dialog/database-result-dialog.component';
import { ContactFormComponent } from '../contact-form/contact-form.component';
import { FormControl } from '@angular/forms';
import { NewContact } from '../../pojos/new-contact';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {
  callbacks = []; // todo figure out type for functions
  contacts: Contact[];
  contactsToDisplay: Contact[];
  contactsToDelete: Contact[] = [];
  isDeleteCheckboxHidden: boolean = true;
  isEditIconHidden: boolean = true;
  isAddDisabled: boolean = false;
  isEditDisabled: boolean = false;
  isDeleteDisabled: boolean = false;
  search = new FormControl('');

  constructor(
    public contactService: ContactService,
    public databaseResultDialog: MatDialog,
    public addDialog: MatDialog
  ) { }

  ngOnInit(): void {
    this.getContacts();
  }

  onAddClick($event: any): void {
    // todo see about extracting this kinda thing to a method..
    this.isEditDisabled = true;
    this.isDeleteDisabled = true;

    const addContactForm = this.addDialog.open(ContactFormComponent, {
      disableClose: true,
      data: {
        id: undefined,
        firstName: undefined,
        lastName: undefined,
        phoneNumber: undefined,
        cellPhoneNumber: undefined,
        alternativePhoneNumber: undefined,
        primaryEmailAddress: undefined,
        secondaryEmailAddress: undefined,
        primaryAddress: undefined,
        secondaryAddress: undefined,
        website: undefined,
        notes: undefined,
      },
      height: '40vw',
      width: '40vw'
    });

    addContactForm.afterClosed().subscribe(() => {
      this.isEditDisabled = false;
      this.isDeleteDisabled = false;
    });

    addContactForm.componentInstance.contactEmitter.subscribe((data) => {
      let newContact: NewContact = {
        firstName: data.firstName,
        lastName: data.lastName,
        phoneNumber: data.phoneNumber,
        cellPhoneNumber: data.cellPhoneNumber,
        alternativePhoneNumber: data.alternativePhoneNumber,
        primaryEmailAddress : data.primaryAddress,
        secondaryEmailAddress: data.secondaryEmailAddress,
        primaryAddress: data.primaryAddress,
        secondaryAddress: data.secondaryAddress,
        website: data.website,
        notes: data.notes,
      };

      this.contactService.saveAdd(newContact).subscribe((contactCreated) => {
        if (contactCreated) {
          const addDialog: MatDialogRef<DatabaseResultDialogComponent> = this.databaseResultDialog.open(DatabaseResultDialogComponent, {
            disableClose: true,
            data: {
              databaseResultMsg: 'Contact created'
            },
          });

          addDialog.afterClosed().subscribe(() => {
            this.getContacts();
          });
        }
      });
    });
  }

  onEditClick($event: any): void {
    if (this.contactsToDisplay.length > 0) {
      this.isAddDisabled = true;
      this.isDeleteDisabled = true;

      if (this.isEditIconHidden) {
        this.isEditIconHidden = false;
      } else if (!this.isEditIconHidden) {
        this.isEditIconHidden = true;
        this.isAddDisabled = false;
        this.isDeleteDisabled = false;
      }
    }
  }

  onSaveContactEdit($event: any): void {
    this.contactService.saveEdit($event).subscribe((editResult) => {
      const editDialog: MatDialogRef<DatabaseResultDialogComponent> = this.databaseResultDialog.open(DatabaseResultDialogComponent, {
        disableClose: true,
        data: {
          databaseResultMsg: 'Edit saved!'
        }
      });

      editDialog.afterClosed().subscribe(() => {
        this.getContacts();
      })
    });
  }

  onDeleteClick($event: any): void {
    this.isAddDisabled = true;
    this.isEditDisabled = true;

    if (this.isDeleteCheckboxHidden) {
      this.isDeleteCheckboxHidden = false;
    } else if (!this.isDeleteCheckboxHidden) {
      if (this.contactsToDelete.length === 1) {
        this.executeCheckboxCallbacks();
        this.contactService.deleteContact(this.contactsToDelete[0]).subscribe((result) => {
          const deleteDialog: MatDialogRef<DatabaseResultDialogComponent> = this.databaseResultDialog.open(DatabaseResultDialogComponent, {
            disableClose: true,
            data: {
              databaseResultMsg: 'deleted!'
            }
          });

          deleteDialog.afterClosed().subscribe(() => {
            this.contactsToDelete = [];
            this.getContacts();
          });
        });
      } else if (this.contactsToDelete.length > 1) {
        this.executeCheckboxCallbacks();
        this.contactService.deleteContacts(this.contactsToDelete).subscribe((result) => {
          const deleteContactsDialog: MatDialogRef<DatabaseResultDialogComponent> = this.databaseResultDialog.open(DatabaseResultDialogComponent, {
            disableClose: true,
            data: {
              databaseResultMsg: 'deleted!'
            }
          });

          deleteContactsDialog.afterClosed().subscribe(() => {
            this.contactsToDelete = [];
            this.getContacts();
          });
        });
      } else if (this.contactsToDelete.length === 0){
        this.isDeleteCheckboxHidden = true;
        this.isAddDisabled = false;
        this.isEditDisabled = false;
      }
    }
  }

  onDeleteContactEmitter(contact: Contact): void {
    if (contact) {
      const indexIfExists = this.contactsToDelete.indexOf(contact);
      if (indexIfExists === -1) {
        this.contactsToDelete = [...this.contactsToDelete, contact];
      } else {
        this.contactsToDelete.splice(indexIfExists, 1);
      }
    }
  }

  executeCheckboxCallbacks() {
    this.callbacks.forEach((callback) => {
      callback();
    });
    // reset
    this.callbacks = [];
  }

  onSetCallBackEmitter(callback): void {
    this.callbacks.push(callback);
  }

  onFilterList($event: any): void {
    if ($event.target.value) {
      this.contactsToDisplay = [...this.contacts];
      this.contactsToDisplay = this.contactsToDisplay.filter((contact) => {
        const fullName = contact.firstName.toLowerCase() + ' ' + contact.lastName.toLowerCase();
        return fullName.includes($event.target.value);
      });
    } else {
      this.contactsToDisplay = [...this.contacts];
    }
  }

  onClear(): void {
    this.search.setValue('');
    this.contactsToDisplay = [...this.contacts];
  }

  getContacts(): void {
    this.contactService.getContacts().subscribe((contacts) => {
      this.contacts = contacts;
      this.contactsToDisplay = [...this.contacts];
    });
  }
}
