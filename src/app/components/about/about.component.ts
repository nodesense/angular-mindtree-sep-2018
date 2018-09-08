import { Component, OnInit } from '@angular/core';
import { DataService } from '../../shared/services/data.service';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css'],
  // services created whenever component created
  // per component, not shared with other components globally
  providers: [
    DataService
  ]
})
export class AboutComponent implements OnInit {

  members: string[] = ['Venkat', 'Karthik'];
  showMembers = true;

  constructor(public dataService: DataService) { 
    console.log('About comp created');
  }

  ngOnInit() {
  }

  addMember(name: string) {
    this.members.push(name);
  }

  empty() {
    this.members = [];
  }
}
