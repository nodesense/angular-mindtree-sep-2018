// product-search.component.ts
import { ProductService } from './../../services/product.service';
import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

// Reactive Forms
// Control over input values

import {FormBuilder, FormControl, FormGroup}
      from '@angular/forms';
import { Product } from '../../models/product';

import {map, filter, debounceTime} from 'rxjs/operators';

@Component({
  selector: 'app-product-search',
  templateUrl: './product-search.component.html',
  styleUrls: ['./product-search.component.css']
})
export class ProductSearchComponent implements OnInit {
  formGroup: FormGroup;
  searchControl: FormControl;

  searchText: string; // not binding with ngModel
  products$: Observable<Product[]>;

  constructor(private builder: FormBuilder,
              private productService: ProductService) { 

        this.searchControl = new FormControl('');

        this.formGroup = this.builder.group({
          'searchBox': this.searchControl
        });

  }

  ngOnInit() {

    this.searchControl
        .valueChanges
         .pipe(map( value => value.trim()))
        // .pipe(map( function(value) { return value.trim(); }))
        .pipe (filter (value => !!value)) // return true if string non empty
        .pipe(debounceTime(500)) // wait 500 milliseconds for user pause typing
        .subscribe (value => {
          this.searchText = value;
          console.log(`**${value}**`);
          this.products$ = this.productService.searchProducts(this.searchText);
        });

  }

}
;
