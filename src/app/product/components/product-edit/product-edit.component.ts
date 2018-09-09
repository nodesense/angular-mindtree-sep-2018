// product-edit.component.ts

import { Product } from './../../models/product';
import { Component, OnInit } from '@angular/core';

import {ActivatedRoute,  // to read data from url /edit/:id
        } from '@angular/router';
import { Observable } from 'rxjs';
import { Brand } from '../../models/brand';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  product: Product = new Product(); // for create page
  brands$: Observable<Brand[]>;
  
  constructor(private route: ActivatedRoute, 
              private productService: ProductService) { }

  ngOnInit() {
    const id = this.route.snapshot.params['id']; // edit/:id
    console.log('ID is', id);

    if (id) { // edit data, pull product by id data from server
      this.productService.getProduct(id)
          .subscribe (product => {
            this.product = product;
          });
    }

    this.brands$ = this.productService.getBrands();
  }

  saveProduct() {
    this.productService
        .saveProduct(this.product)
        .subscribe ( savedProduct => {
          alert(JSON.stringify(savedProduct));
        });
  }
}
