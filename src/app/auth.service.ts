import { Injectable } from '@angular/core';
import { CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot }    from '@angular/router';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class AuthService implements CanActivate {

  constructor(private router: Router) {}
  
  canActivate(): boolean  {
    //let url: string = state.url;
    
        if (localStorage.getItem('userData1')) {
          //console.log(localStorage.getItem('userData1'))
          return true;
        }
        
        else if(localStorage.getItem('adminData1'))
        {
          return true;
        }

        else {
          this.router.navigate(['/login']);
          return false;
        }
  }

  
  
}
