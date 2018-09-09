// shared.module.ts
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddressComponent } from './components/address/address.component';
import { LikeComponent } from './components/like/like.component';
import { PowerPipe } from './pipes/power.pipe';
import { SortPipe } from './pipes/sort.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { HighlightDirective } from './directives/highlight.directive';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { InterceptorService } from './services/interceptor.service';


@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
      // to be used in the shared module only
      // private to shared module
      AddressComponent,
      LikeComponent,
      PowerPipe,
      SortPipe,
      FilterPipe,
      HighlightDirective
    ],

  exports: [
    // public component, to be used in other modules
    AddressComponent,
    LikeComponent,
    PowerPipe,
    SortPipe,
    FilterPipe,
    HighlightDirective
  ],

  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: InterceptorService,
      multi: true
    }
  ]
})
export class SharedModule { }
