import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  counter = 0;
  title = 'Home';
  today: Date = new Date(); // current date/time
  price = 99.99;

  isMouseOver = false;

  constructor() { }


  ngOnInit() {
  }

  increment() {
    this.counter++;
  }

}
