import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { HomeComponent, homeChildRoutes } from './home/home.component';
import { ProfileComponent } from './profile/profile.component';
import { RegistrationComponent } from './registration/registration.component';
import { AuthService } from 'src/app/auth.service';
import { LoginService } from 'src/app/login.service';
import { StudentService } from "src/app/student.service";
import { AdminhomeComponent } from './adminhome/adminhome.component';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    HomeComponent,
    ProfileComponent,
    RegistrationComponent,
    AdminhomeComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RouterModule.forRoot(
      [
        { 
          path:"", 
          component:HomeComponent,
          children:[
            {
              path: '',
              component: ProfileComponent
            },
            {
              path: 'signup',
              component: RegistrationComponent
            }
          ],
          canActivate:[AuthService]
        },
        { 
          path:"login", 
          component:LoginComponent
        },
        { 
          path:"adminhome", 
          component:AdminhomeComponent,
          canActivate:[AuthService] 
        }
      ]
    )
  ],
  providers: [AuthService, LoginService, StudentService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
