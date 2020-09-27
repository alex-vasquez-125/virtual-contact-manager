import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContactListItemComponent } from './contact-list-item.component';
import { MatDialog } from '@angular/material/dialog';
import { Contact } from '../../pojos/contact';

describe('ListItemComponent', () => {
  let component: ContactListItemComponent;
  let fixture: ComponentFixture<ContactListItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContactListItemComponent ],
      providers: [
        { provide: MatDialog, useValue: {} },
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContactListItemComponent);
    component = fixture.componentInstance;
    const contact: Contact = new Contact(1,
      'Alex',
      'V',
      '1-234-567-8910',
      '1-234-567-8910',
      '1-234-567-8910',
      'email@email.com',
      'email@email.com',
      '233 S Wacker Dr, Chicago, IL 60606',
      '233 S Wacker Dr, Chicago, IL 60606',
      'www.dummy-website.com',
      ''
      );
    component.contact = contact;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
