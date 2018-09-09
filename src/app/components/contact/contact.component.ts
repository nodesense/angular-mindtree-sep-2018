import { Address } from './../../shared/models/address';
import { Component, OnInit } from '@angular/core';

class CustomerQuery {
    name: string;
    email: string;
    description: string;
    department: string;
}

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  // model
  contactDetails: CustomerQuery = new CustomerQuery();

  // undefined
  // define address, use app-address in contact component
  address: Address = { city: 'Chennai', 
                        state: 'TN' };

  contactLikes = 1000;

  constructor() { }

  ngOnInit() {
    this.contactDetails.name = 'John';
    this.contactDetails.department = 'care';
  }

  save() {
    alert(JSON.stringify(this.contactDetails));
  }

  reset() {
    this.contactDetails = new CustomerQuery();
  }

}
