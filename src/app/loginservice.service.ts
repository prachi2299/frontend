import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UniversityStaffMember } from './model/universityStaffMember';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService {
  baseURL="http://localhost:8083/";

  constructor(private httpclient:HttpClient) { }

  loginAsAdmissionCommiteeMember(member:UniversityStaffMember):Observable<any>{
    console.log("login as admission commitee member");
    return this.httpclient.post('http://localhost:8083/login/commitee',member);
  }
  loginAsUniversityStaffMember(member:UniversityStaffMember):Observable<any>{
    console.log("login as university staff member");
    return this.httpclient.post('http://localhost:8083/login/staff',member);
  }
}
