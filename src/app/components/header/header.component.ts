// header.component.ts
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../cart/services/cart.service';

import {Observable} from 'rxjs';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  amount: number;
  totalItems$: Observable<number>; // to be used with async pipe

  constructor(private cartService: CartService) { 

    this.amount = this.cartService.amount;

    this.totalItems$ = this.cartService.totalItems$;

  }

  ngOnInit() {
    // subscribe for amount$
    this.cartService.amount$
                    .subscribe( amount => {
                      this.amount = amount;
                    });
  }

}
