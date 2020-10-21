import { ContactsService } from './../contacts.service';
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-contact-update',
  templateUrl: './contact-update.component.html',
  styleUrls: ['./contact-update.component.css']
})
export class ContactUpdateComponent implements OnInit {

  contactForm = new FormGroup({
    name: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required)
  })

  id: number

  constructor(
    private contactService: ContactsService,
    private route: ActivatedRoute
    ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe(paramMap => {
      this.id = parseInt(paramMap.get('id'))

      this.contactService.getIdContact(this.id).subscribe(contact => {
        this.contactForm.reset(contact)
        // console.log(contact)
      })
    })
  }

  updateContact() {
    this.contactService.updateContact({ id: this.id, ...this.contactForm.value })
      .subscribe(contact => {
        this.contactForm.reset(contact)
      })
  }

}
