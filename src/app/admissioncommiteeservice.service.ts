import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AdmissionCommiteeMember } from './model/AdmissionCommiteeMember'

@Injectable({
  providedIn: 'root'
})
export class AdmissioncommiteeService {

  baseURL="http://localhost:8070/admissioncommitees";
  constructor(private httpclient:HttpClient) { }

  getCommiteeMembers():Observable<AdmissionCommiteeMember[]>{
    console.log("view all commitee URL is calling here");
    return this.httpclient.get<AdmissionCommiteeMember[]>('http://localhost:8070/admissioncommitees');
  }

  addCommiteeMembers(admissioncommitees:AdmissionCommiteeMember):Observable<any>{
    console.log("add commitee member method is calling");
    return this.httpclient.post('http://localhost:8070/admissioncommitees',admissioncommitees);
  }

  getCommiteeMember(aid:number):Observable<any>{
    console.log("view course by id is calling");
    return this.httpclient.get('http://localhost:8070/admissioncommitees/adminId'+aid);
  }

  deleteCommiteeMember(aid:number): Observable<any>{
    console.log("delete course method by id is calling here");
    return this.httpclient.delete('http://localhost:8070/admissioncommitees/adminId'+aid);
  }

  updateCommiteeMember(admissioncommitees:AdmissionCommiteeMember) : Observable<any>{
    console.log("update course method is calling here");
    return this.httpclient.put('http://localhost:8070/admissioncommitees/adminId',admissioncommitees);
  }
}
