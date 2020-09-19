import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Contact } from '../../pojos/contact';

@Component({
  selector: 'app-contact-form',
  templateUrl: './contact-form.component.html',
  styleUrls: ['./contact-form.component.css']
})
export class ContactFormComponent implements OnInit {
  @Output() contactEmitter = new EventEmitter();

  contactForm = this.formBuilder.group({
    id: [this.data.id],
    firstName: [this.data.firstName],
    lastName: [this.data.lastName],
    phoneNumber: [this.data.phoneNumber],
    cellPhoneNumber: [this.data.cellPhoneNumber],
    alternativePhoneNumber: [this.data.alternativePhoneNumber],
    primaryEmailAddress: [this.data.primaryEmailAddress],
    secondaryEmailAddress: [this.data.secondaryEmailAddress],
    primaryAddress: [this.data.primaryAddress],
    secondaryAddress: [this.data.secondaryAddress],
    website: [this.data.website],
    notes: [this.data.notes],
  });

  constructor(
    private formBuilder: FormBuilder,
    @Inject(MAT_DIALOG_DATA) public data: Contact
) { }

  ngOnInit(): void { }

  onSubmit(): void {
    this.contactEmitter.emit(this.contactForm.value);
  }
}
