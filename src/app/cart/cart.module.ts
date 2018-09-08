// cart.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartComponent } from './components/cart/cart.component';
import { CartSummaryComponent } from './components/cart-summary/cart-summary.component';
import { CheckoutComponent } from './components/checkout/checkout.component';
import { SharedModule } from '../shared/shared.module';

import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [
  {
    path: 'cart',
    component: CartComponent
  },
  {
    path: 'checkout',
    component: CheckoutComponent
  }
];

@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    // for all the child modules
    RouterModule.forChild(routes),
  ],
  declarations: [
        CartComponent,
        CartSummaryComponent, 
        CheckoutComponent],

  exports: [
    CartComponent
  ]
})
export class CartModule { }
