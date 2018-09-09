// header.component.ts

import { AuthService } from './../../shared/services/auth.service';

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


  authenticated$: Observable<boolean>;

  constructor(private cartService: CartService, 
              private authService: AuthService) { 

    // this.amount = this.cartService.amount;

    this.totalItems$ = this.cartService.totalItems$;

    this.authenticated$ = this.authService.authenticated$;
  }

  logout() {
    this.authService.logout();
  }

  ngOnInit() {
    // subscribe for amount$
    this.cartService.amount$
                    .subscribe( amount => {
                      console.log('HEADER SUBSCRIBE');
                      this.amount = amount;
                    });
  }

}
