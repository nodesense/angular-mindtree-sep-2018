// cart-summary.component.ts
import { Component, 
          OnInit,
          Input,
          Output,
          EventEmitter
        } from '@angular/core';

@Component({
  selector: 'app-cart-summary',
  templateUrl: './cart-summary.component.html',
  styleUrls: ['./cart-summary.component.css']
})
export class CartSummaryComponent implements OnInit {

  @Input()
  amount: number;

  @Input()
  totalItems: number;

  //TODO:  define emptyCart event

  @Output()
  emptyCartEvent: EventEmitter<void> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  empty() {
    // publish event
    this.emptyCartEvent.emit();
  }

}
