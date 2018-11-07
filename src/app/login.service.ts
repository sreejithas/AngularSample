import { Injectable, OnInit } from '@angular/core';
import { User } from 'src/app/user';
import { Http } from "@angular/http";
import { StudentService } from "src/app/student.service";
import { Router } from "@angular/router";
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs'


@Injectable({
  providedIn: 'root'
})
export class LoginService{
	

  constructor(private _studServ:StudentService,private router: Router) {

  }
	studArray : any[] = [];

	doLogin(loginObject)
	{
		// console.log(loginObject.email)
		this._studServ.getStudent().subscribe(
			data => {
				this.studArray = data;
				console.log(this.studArray);
				for(var i=0; i <= this.studArray.length; i++ )
				{
					if(loginObject.email == this.studArray[i].username && loginObject.password == this.studArray[i].password )
					{
						if(this.studArray[i].role == "user")
						{
							localStorage.setItem('userData1', JSON.stringify(this.studArray[i]));
							this.router.navigate(["/"]);
							break;
						}
						else
						{
							localStorage.setItem('adminData1', JSON.stringify(this.studArray[i]));
							this.router.navigate(["/adminhome"]);
							break;
						}
					}
					else
					{
						if( i == this.studArray.length-1)
						{
							this.router.navigate(["/login"]);
							alert("Invalid Crd")
							break;
							
						}
						else
						{
							continue;
						}
					}
				}
			}
		)

	}
  

}
