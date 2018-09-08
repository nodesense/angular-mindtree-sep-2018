// product-list.component.ts
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

  constructor(private productService: ProductService) {
   }

  ngOnInit() {
    this.products$ = this.productService.getProducts();
  }

}
