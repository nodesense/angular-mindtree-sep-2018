import { Address } from './../../shared/models/address';
import { Component, OnInit,
         Input } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  // @Input is for property binding
  // Parent App sends data
  // Footer receives it

  // properties of footer component

  @Input()
  company: string;

  @Input()
  address: Address;

  @Input()
  copyRightsDate: Date;

  constructor() { }

  ngOnInit() {
   }

}
