import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';

import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem[] = [];

  totalItems = 0;
  amount = 0;

  amount$: Subject<number> = new Subject();
  totalItems$: Subject<number> = new Subject();


  constructor() { 
    console.log('CartService created');
  }

  calculate() {
    let amount = 0;
    let totalItems = 0;

    for (const item of this.items) {
      amount += item.price * item.qty;
      totalItems += item.qty;
    }

    this.amount = amount;
    this.totalItems = totalItems;
    // publish amount
    this.amount$.next(this.amount);

    // publish totalItems
    this.totalItems$.next(this.totalItems);
  }

  addItem(item: CartItem) {
    this.items.push(item);
    this.calculate();
  }

  removeItem(id: number) {
    this.calculate();
  }

  updateItem(id: number, qty: number) {
    this.calculate();
  }

  empty() {
    this.items = [];
    this.calculate();
  }
}
