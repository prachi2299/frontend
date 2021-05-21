import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { observable, Observable,throwError  } from 'rxjs';
import { Applicant } from './model/applicant';
import { AdmissionStatus } from './model/admissionStatus';

import { retry, catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ApplicantserviceService {

  baseURL="http://localhost:8083/";
  constructor(private httpclient:HttpClient) { }
  

  addApplicant(applicant:Applicant) : Observable<any>{
    console.log("add product method is calling here");
    return this.httpclient.post('http://localhost:8083/applicants',applicant);
  }
  updateApplicant(applicantId:string,applicant:Applicant):Observable<any>{
    console.log("update product method is calling here");
    return this.httpclient.put('http://localhost:8083/applicants/'+applicantId,applicant);
  }
  
  deleteApplicant(applicantId:string):Observable<any>{
    console.log("delete product method is calling here");
    return this.httpclient.delete('http://localhost:8083/applicants/'+applicantId);
  }
  viewApplicant(applicantId:string) :Observable<any>{
    console.log("view all employees URL is calling here");
    return this.httpclient.get('http://localhost:8083/applicants/'+applicantId);
  }

  viewAllApplicantsByStatus(status:AdmissionStatus): Observable<any>{
    console.log("get product method is calling here");
    return this.httpclient.get('http://localhost:8083/applicants/status/'+status);
  }

  
  
}
