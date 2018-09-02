import { Address } from './shared/models/address';
import {Component} from '@angular/core';

// MVW - Model View Whatever (Component)
// MVC Model View Component

@Component({
    // meta data / used by ng framework
    // component html custom tag
    // <app-root></app-root>
    selector : 'app-root',

    // View
    templateUrl: 'app.component.html',

    // scopped styles
    // styles applies to this component only

    styleUrls : [
        'app.component.css'
    ]

})
export class AppComponent {

    // Models
    appTitle = 'Angular App 7';
    address: Address = {    state: 'KA',
                            city: 'BLR ',
                            pincode: 560001};
    today: Date = new Date();

}
