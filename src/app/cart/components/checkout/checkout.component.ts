// checkout.component.ts
import { Component, OnInit } from '@angular/core';

import {Subject} from 'rxjs';

// RxJS Publish/Subscribe
// Event
// Observable/stream

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.css']
})
export class CheckoutComponent implements OnInit {
  // $ is convention to declare observable variables
  coupon$: Subject<number> = new Subject();

  discount: number;

  constructor() { }

  ngOnInit() {
    // Subscribe
    this.coupon$
      .subscribe (d => {  
        this.discount = d;
        console.log('Subscribed ', d);
      });
  }

  apply() {
    const offer = Math.ceil(Math.random() * 100);
    console.log('Discount is ', offer);

    // Publish the values
    this.coupon$.next(offer);
  }

}
