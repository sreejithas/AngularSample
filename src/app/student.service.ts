import { Injectable } from '@angular/core';
import { Http,Response } from "@angular/http";
import { map, take } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

  constructor(private _http: Http) { }

  getStudent()
  {
    return this._http.get("http://localhost:5555/stud").pipe(
      map((res:Response)=>res.json())
    )
  }
  addStudent(student)
  {
    return this._http.post("http://localhost:5555/stud", student)
  }
}
