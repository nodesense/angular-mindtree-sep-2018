// product.service.ts

import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Product } from '../models/product';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private http: HttpClient) { }

  getProducts(): Observable<Product[]> {
    // http.get shall publish the data after receiving from server
    return this
          .http
          .get<Product[]>('http://localhost:7070/api/products');
  }
}
