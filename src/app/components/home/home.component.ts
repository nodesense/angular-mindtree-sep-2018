import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  counter = 0;
  title = 'Home';
  today: Date = new Date(); // current date/time
  price = 99.99;

  isMouseOver = false;

  timer: any;

  constructor() { 
    console.log('Home Component cons');
  }


  ngOnInit() {
    console.log('Home Component ngOnInit');

    this.timer = setInterval( () => {
      this.counter++;
      console.log('Home timer ', this.counter);
    }, 5000);

  }

  ngOnDestroy() {
    console.log('Home Component ngOnDestroy');
    clearInterval(this.timer); // stop the timer
  }

  increment() {
    this.counter++;
  }

}
