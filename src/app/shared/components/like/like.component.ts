// like.component.ts
import { Component, OnInit,
                    Input,
                    Output,
                    EventEmitter } from '@angular/core';
 
@Component({
  selector: 'app-like',
  templateUrl: './like.component.html',
  styleUrls: ['./like.component.css']
})
export class LikeComponent implements OnInit {

  // Two way binding [()] - Property + Event binding
  @Input()
  likes: number;

  // for two way binding, output should input name + 'Change'
  @Output()
  likesChange: EventEmitter<number>  = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  up() {
    this.likesChange.emit(this.likes + 1);
  }

  down() {
    this.likesChange.emit(this.likes - 1);
  }

}
