import { Contact, ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-list',
  templateUrl: './contact-list.component.html',
  styleUrls: ['./contact-list.component.css']
})
export class ContactListComponent implements OnInit {

  contacts: Contact[] = []

  constructor( private contactsService: ContactsService) { }

  ngOnInit(): void {
    this.contactsService.getContacts().subscribe(contacts => {
      this.contacts = contacts;
      console.log(this.contacts)
    })
  }

}
