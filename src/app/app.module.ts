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

import {RouterModule, Routes} from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { ProductModule } from './product/product.module';

// ng 4.3 onwards
import {HttpClientModule} from '@angular/common/http';

// routing step 1: configuration:  map url path to component
const routes: Routes = [
    {
        path: '', // default home page
        component: HomeComponent
    },

    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },

    // not found
    {
        path: '**',
        component: NotFoundComponent
    }
];

@NgModule ({
    imports: [
        // reference to other modules
        BrowserModule,
        FormsModule,
        HttpClientModule,
        // step 2: Apply routes to Angular
        // forRoot, call only once per application
        // create many router services/providers for the application
        RouterModule.forRoot(routes),

        SharedModule,
        CartModule, // this also brings routes from cart
        ProductModule
    ],

    declarations: [
        // component, pipes and directives
        AppComponent,
        HeaderComponent,
        FooterComponent,
        HomeComponent,
        AboutComponent,
        ContactComponent,
        NotFoundComponent
        // Header, Footer, Home 
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {

}
