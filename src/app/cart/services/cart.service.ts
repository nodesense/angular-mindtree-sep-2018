import { CartItem } from './../models/cart-item';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  items: CartItem[] = [];

  totalItems = 0;
  amount = 0;

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
