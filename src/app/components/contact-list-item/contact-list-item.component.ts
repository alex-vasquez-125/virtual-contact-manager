import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Contact } from '../../pojos/contact';
import { MatDialog } from '@angular/material/dialog';
import { ContactFormComponent } from '../contact-form/contact-form.component';

@Component({
  selector: 'app-contact-list-item',
  templateUrl: './contact-list-item.component.html',
  styleUrls: ['./contact-list-item.component.css']
})
export class ContactListItemComponent implements OnInit {
  @Input() contact: Contact;
  @Input() isDeleteCheckboxHidden: boolean;
  @Input() isEditIconHidden: boolean;
  @Output() saveContactEdit = new EventEmitter();
  @Output() deleteContactEmitter = new EventEmitter();
  @Output() setCallbackEmitter = new EventEmitter();
  isCheckboxChecked: boolean;

  constructor(
    public editDialog: MatDialog,
  ) { }

  ngOnInit(): void { }

  onEdit($event: any, contact: Contact): void {
    // todo refactor out to a util file or something..
    const editForm = this.editDialog.open(ContactFormComponent, {
      disableClose: true,
      data: {
        // ...contact todo look at different ways to create this.. might want to switch to interface
        id: contact.id,
        firstName: contact.firstName,
        lastName: contact.lastName,
        phoneNumber: contact.phoneNumber,
        cellPhoneNumber: contact.cellPhoneNumber,
        alternativePhoneNumber: contact.alternativePhoneNumber,
        primaryEmailAddress: contact.primaryEmailAddress,
        secondaryEmailAddress: contact.secondaryEmailAddress,
        primaryAddress: contact.primaryAddress,
        secondaryAddress: contact.secondaryAddress,
        website: contact.website,
        notes: contact.notes,
      },
      height: '40vw',
      width: '40vw'
    });

    // subscribe this way since editForm isn't child of contact-list-item
    editForm.componentInstance.contactEmitter.subscribe((data) => {
      this.saveContactEdit.emit(data);
    });
  }

  onCheckboxChange($event: any): void {
    this.deleteContactEmitter.emit(this.contact);
    this.setCallbackEmitter.emit(() => {
      this.isCheckboxChecked = false;
    });
  }
}
