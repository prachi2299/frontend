import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Course } from './model/course';

@Injectable({
  providedIn: 'root'
})
export class CourseserviceService {

  baseURL="http://localhost:8070/courses";
  constructor(private httpclient:HttpClient) { }

  getCourses():Observable<Course[]>{
    console.log("view all course URL is calling here");
    return this.httpclient.get<Course[]>('http://localhost:8070/courses');
  }

  addCourse(course:Course):Observable<any>{
    console.log("add course method is calling");
    return this.httpclient.post('http://localhost:8070/courses',course);
  }

  getCourse(cid:number):Observable<any>{
    console.log("view course by id is calling");
    return this.httpclient.get('http://localhost:8070/courses/courseId'+cid);
  }

  deleteCourse(cid:number): Observable<any>{
    console.log("delete course method by id is calling here");
    return this.httpclient.delete('http://localhost:8070/courses/courseId'+cid);
  }

  updateCourse(course:Course) : Observable<any>{
    console.log("update course method is calling here");
    return this.httpclient.put('http://localhost:8070/courses/courseId',course);
  }

}
