// cart.service.ts
import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';

// Subject publish the values only when next(publish) is called
import {Subject, Observable} from 'rxjs';

// BehaviorSubject publish the values when next(publish) is called
// BehaviorSubject also publish values when new subscriber added
// no need to wait for next, publish last known value


import {BehaviorSubject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem[] = [];

  totalItems = 0;
  amount = 0;

  amount$: BehaviorSubject<number> = new BehaviorSubject(0);
  totalItems$: BehaviorSubject<number> = new BehaviorSubject(0);
  items$: BehaviorSubject<CartItem[]> = new BehaviorSubject([]);


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

    this.items$.next(this.items);
  }

  removeItem(id: number) {
    this.calculate();

    this.items$.next(this.items);
  }

  updateItem(id: number, qty: number) {
    this.calculate();

    this.items$.next(this.items);
  }

  empty() {
    this.items = [];
    this.calculate();

    this.items$.next(this.items);
  }
}
