import { Observable } from 'rxjs';
import { CartItem } from './../../models/cart-item';
import { CartService } from './../../services/cart.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  amount$: Observable<number>;
  totalItems$: Observable<number>;
  items$: Observable<CartItem[]>;

  // BAD to call service from view
  constructor(private cartService: CartService) { 
    console.log('CartComponent created');

    this.amount$ = this.cartService.amount$;
    this.totalItems$ = this.cartService.totalItems$;
    this.items$ = this.cartService.items$;
  }

  ngOnInit() {
  }

  addItem() {
    const id = Math.ceil(Math.random() * 10000);
    const price = 10 + Math.ceil(Math.random() * 100);

    const item = new CartItem(id,
                              `Product ${id}`,
                              price,
                              1);

    this.cartService.addItem(item);
  }

  removeItem(id: number) {
  }

  updateItem(id: number, qty: number) {
  }

  empty() {
    this.cartService.empty();
  }

}
