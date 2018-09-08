import { Address } from './../../models/address';
import { Component, OnInit
          , Input, 
          OnDestroy} from '@angular/core';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.css']
})
export class AddressComponent implements OnInit, OnDestroy  {

  @Input()
  address: Address;

  // step 1: during creationg of component object, before view init
  constructor() { 
    console.log('Address cons');
  }

  // step 2: after view initialized in the UI
  ngOnInit() {
    console.log('Address ngOnInit');
  }

  // step 3: before removing component from UI
  ngOnDestroy() {
    console.log('Address ngOnDestroy');

  }
}
