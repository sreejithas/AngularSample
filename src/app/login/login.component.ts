import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login.service';
import { User } from 'src/app/user';
import { StudentService } from "src/app/student.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  logi:User;
  submitted:boolean= false ;
  ;
  constructor(private router: Router, private LogService:LoginService, private _studServ:StudentService) { }
  errMsg:any;
  ngOnInit() {

    if(localStorage.getItem('userData1')) {
			this.router.navigate(['/']);
		}
    else if(localStorage.getItem('adminData1')) {
			this.router.navigate(['/adminhome']);
		}
  }

  login(signup1)
  {
    
    this.submitted = true ;
    this.logi={
      "email":signup1.email,
      "password":signup1.password
    }
   
    console.log(this.logi)
    this.doLogin(this.logi)
  }

  studArray:any[]

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
							// alert("Invalid Crd")
							
              this.errMsg = '!!!  Invalid Credentials'
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
