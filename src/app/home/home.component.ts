import { Component, OnInit } from '@angular/core';
import { ProfileComponent } from 'src/app/profile/profile.component';
import { Routes } from '@angular/router';
import { Router } from '@angular/router';
import { RegistrationComponent } from "src/app/registration/registration.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private router:Router) { }

  ngOnInit() {
   
  }

  logOut(){
    
    localStorage.removeItem('userData1');
    this.router.navigate(['/login']);
  }

 

}

export const homeChildRoutes : Routes = [
  {
    path: '',
    component: ProfileComponent
  },
  {
    path: 'signup',
    component: RegistrationComponent
  }
]
