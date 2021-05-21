import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UniversityStaffMember } from './model/universitystaffmember';
import { Observable } from 'rxjs';
import { Course } from './model/course';

@Injectable({
  providedIn: 'root'
})
export class UniversitystaffmemberserviceService {

  baseURL = "http://localhost:8070/api/v1";
  constructor(private httpclient: HttpClient) { }

  addStaff(user: UniversityStaffMember): Observable<any> {
    console.log("addstaff method is calling here");
    return this.httpclient.post('http://localhost:8070/api/v1/universitystaff', user);

  }
  updateStaff(user: UniversityStaffMember):Observable<any>{
    console.log("updatestaff method is calling here");
    return this.httpclient.put('http://localhost:8070/api/v1/universitystaff/',user);
  
   }
   getStaff(staffId:number):Observable<any>{
    console.log("viewStaff method is calling here");
    return this.httpclient.get('http://localhost:8070/api/v1/universitystaff/' +staffId);
  
   }
   deleteStaff(staffId:number):Observable<any>{
    console.log("delete staff method is calling here");
    return this.httpclient.delete('http://localhost:8070/api/v1/universitystaff/' +staffId);
  
   }
   getAllStaffs(): Observable<UniversityStaffMember[]> {
    console.log("view all staff URl is calling here");
    return this.httpclient.get<UniversityStaffMember[]>('http://localhost:8070/api/v1/universitystaff');
  }
  addCourse(course: Course): Observable<any> {
    console.log("addcourse method is calling here");
    return this.httpclient.post('http://localhost:8070/api/v1/universitystaff/courses', course);

  }
  deleteCourse(courseId:number):Observable<any>{
    console.log("delete course method is calling here");
    return this.httpclient.delete('http://localhost:8070/api/v1/universitystaff/courses/' +courseId);
  
   }
   updateCourse(course: Course):Observable<any>{
    console.log("updatecourse method is calling here");
    return this.httpclient.put('http://localhost:8070/api/v1/universitystaff/courses/',course);
  
   }
}