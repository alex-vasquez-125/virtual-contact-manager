import { Injectable } from '@angular/core';
import { Contact } from '../pojos/contact';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import { NewContact } from '../pojos/new-contact';

@Injectable({
  providedIn: 'root'
})
export class ContactService {
  contactsUriBase: string = 'api/contacts';
  contacts: Contact[] = [];

  constructor(
    private http: HttpClient
  ) { }

  getContacts(): Observable<Contact[]> {
    return this.http.get<Contact[]>(this.contactsUriBase);
  }

  saveAdd(newContact: NewContact): Observable<HttpResponse<Contact>> {
    const options = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response' as 'body',
    };

    return this.http.post<HttpResponse<Contact>>(this.contactsUriBase, newContact, options);
  }

  saveEdit(contactEdit: Contact): Observable<HttpResponse<any>> {
    const editUrl = this.contactsUriBase + `/${contactEdit.id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      }),
      observe: 'response' as 'body'
    };

    return this.http.put<HttpResponse<any>>(editUrl, contactEdit, httpOptions);
  }

  deleteContact(contactToDelete: Contact): Observable<any> {
    let deleteObservable: Observable<any>;
    const resourceToDelete = this.contactsUriBase + `/${contactToDelete.id}`;
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };

    if (contactToDelete) {
      deleteObservable = this.http.delete<any>(resourceToDelete, httpOptions);
    } else {
      console.log('contactToDelete was false');
    }
    return deleteObservable;
  }

  deleteContacts(contactsToDelete: Contact[]): Observable<any> { // todo should i use string or something?
    const httpOptions = {
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    };
    const deleteContactsUrl = this.contactsUriBase + '/delete-list';

    return this.http.post<any>(deleteContactsUrl, contactsToDelete, httpOptions);
  }
}
