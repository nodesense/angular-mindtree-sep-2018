// footer.component.ts
import { Address } from './../../shared/models/address';
import { Component, OnInit,
         Input,
        
         Output,
         EventEmitter

        } from '@angular/core';

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

  // Child to parent communication
  // Event Binding (custom event)
  // RxJS Publish and Subscribe
  // Event Emitter is a subject

  // Output creates custom event named (contactEvent)
  @Output()
  contactEvent: EventEmitter<Address> = new EventEmitter();



  @Input()
  company: string;

  @Input()
  address: Address;

  @Input()
  copyRightsDate: Date;

  constructor() { }

  ngOnInit() {
   }

   contactClicked() {
     // emitting event, that send this.address value
     // publishing value
     this.contactEvent.emit(this.address);
   }

}
