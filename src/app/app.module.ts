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

        // step 2: Apply routes to Angular
        RouterModule.forRoot(routes),

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
