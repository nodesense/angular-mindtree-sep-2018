// product-list.component.ts

import { CartItem } from './../../../cart/models/cart-item';
import { CartService } from './../../../cart/services/cart.service';
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
   products$: Observable<Product[]>;

   fieldName: string;
   predicate: string;
   expected: number;

  constructor(private productService: ProductService, 
             private cartService: CartService) {
   }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

  deleteProduct(id: number) {
    this.productService
      .deleteProduct(id)
        .subscribe( () => {
          // Success, 200 OK, product got deleted
          alert(`Product ${id}  deleted`);
          // get fresh data from server
          this.products$ = this.productService.getProducts();
        });
  }

  addToCart(product: Product) {
    const item = new CartItem(product.id,
                              product.name,
                              product.price,
                              1
                              );

    this.cartService.addItem(item);
  }

}
