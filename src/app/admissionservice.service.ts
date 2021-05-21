import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Admission } from './model/admission';

@Injectable({
  providedIn: 'root'
})
export class AdmissionserviceService {

  baseURL ="http://localhost:8086/admissions/";
  constructor( private httpclient:HttpClient){

   }

   getAdmissionByCourseId(cid:number){
    console.log("view admission by course is calling here");
    return this.httpclient.get<Admission[]>('http://localhost:8086/admissions/course/'+cid);
  }

  getAdmissionByDate(date:Date){
    console.log("view admission by date method is calling here");
    return this.httpclient.get<Admission[]>('http://localhost:8086/admission/'+date);
  }

  addAdmission(admission:Admission) : Observable<any>{
    console.log("add admission method is calling here");
    return this.httpclient.post('http://localhost:8086/admissions',admission);
  }
  deleteAdmission(aid:number):Observable<any>{
    console.log("delete admission method by id is calling here");
    return this.httpclient.delete('http://localhost:8086/admissions/'+aid);
  }

  updateAdmission(admission:Admission):Observable<any>{
    console.log("update admission method by id is calling here");
    return this.httpclient.put('http://localhost:8086/admissions/',admission);
  }
}