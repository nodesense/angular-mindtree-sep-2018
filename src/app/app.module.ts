import { CartModule } from './cart/cart.module';
import {NgModule} from '@angular/core';
import { AppComponent } from './app.component';

import {BrowserModule} 
        from '@angular/platform-browser';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ContactComponent } from './components/contact/contact.component';

import {FormsModule} from '@angular/forms';
import { SharedModule } from './shared/shared.module';

@NgModule ({
    imports: [
        // reference to other modules
        BrowserModule,
        FormsModule,

        SharedModule,
        CartModule
    ],

    declarations: [
        // component, pipes and directives
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent
        // Header, Footer, Home 
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
