import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  xyz: any;

  constructor() { }



  ngOnInit() {
    this.xyz = JSON.parse(localStorage.getItem('userData1')).name;
  }

}
