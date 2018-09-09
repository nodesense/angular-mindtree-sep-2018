import { AuthGuard } from './../shared/guards/auth.guard';

// product.module.ts

import { SharedModule } from './../shared/shared.module';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductHomeComponent } from './components/product-home/product-home.component';
import { ProductEditComponent } from './components/product-edit/product-edit.component';
import { ProductSearchComponent } from './components/product-search/product-search.component';
import { ProductListComponent } from './components/product-list/product-list.component';

// nested navigation
import {Routes, RouterModule} from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
const routes: Routes = [
  {
    // path: 'products',
    path: '', // for lazy loaded module

    component: ProductHomeComponent,

    children: [
      {
        path: 'list',
        component: ProductListComponent
      },
      {
        path: 'create',
        component: ProductEditComponent,
        canActivate: [AuthGuard]
      },
      {
        path: 'search',
        component: ProductSearchComponent
      },
      {
        path: 'edit/:id',
        component: ProductEditComponent,
        canActivate: [AuthGuard]
      },
    ]
  }
];


@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  declarations: [ProductHomeComponent, 
                 ProductEditComponent, 
                 ProductSearchComponent, 
                 ProductListComponent]
})
export class ProductModule { }
