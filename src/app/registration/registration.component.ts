import { Component, OnInit } from '@angular/core';
import { StudentService } from "src/app/student.service";

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  constructor(private stuService: StudentService) { }

  ngOnInit() {
    
  }

  studObj:object={};

  add3(student)
  {
    this.studObj={
      "name":student.name,
      "username":student.username,
      "password":student.password,
      "role":"user"
    }
    this.stuService.addStudent(this.studObj).subscribe(
      data => console.log(data)
    )
  }

  

}
