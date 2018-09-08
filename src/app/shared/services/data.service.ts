// data.service.ts
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  pageLikes = 0;

  constructor() {
     console.log('DataService created');
   }

   up() {
     this.pageLikes++;
   }

   down() {
    this.pageLikes--;
  }
}
