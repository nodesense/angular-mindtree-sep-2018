import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  members: string[] = ['Venkat', 'Karthik'];
  showMembers = true;

  constructor() { }

  ngOnInit() {
  }

  addMember(name: string) {
    this.members.push(name);
  }

  empty() {
    this.members = [];
  }
}
