import { Component, OnInit } from '@angular/core';
import {ApplicantserviceService} from '../applicantservice.service'
import { Applicant } from '../model/applicant';
//import { FormControl } from '@angular/forms';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AdmissionStatus } from '../model/admissionStatus';

@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styleUrls: ['./applicant.component.css']
})
export class ApplicantComponent implements OnInit {
  myval='';
  applicant: Applicant = new Applicant();
  status=['Pending','Applied'];
  submitted = false;
  showMsg=false;
  constructor(private applicantSevice:ApplicantserviceService, private router: Router) { }

  ngOnInit(): void {
    this.myval=this.status[0];
  }
  addApplicant() {

    this.applicantSevice.addApplicant(this.applicant).subscribe(result => {
      console.log(result);
      this.applicant = new Applicant();

    
    }, error => console.log(error));
  }
  
  onSubmit() {
    this.submitted = true;
    this.showMsg= true;

    this.addApplicant();
    


  }
  
 
/*
  constructor(applicantSerive:ApplicantserviceService,
    private router:Router) { }

  formSubmitted=false;
 applicants:Applicant[]=[];
 applicant:Applicant;
 applicantForm:FormGroup;
applicantId:FormControl;
applicantName:FormControl;
mobileNumber:FormControl;
applicantDegree:FormControl;
applicantGraduationPercent:FormControl;
status:FormControl;

ngOnInit(): void {
  this.applicantId = new FormControl();
  this.applicantName=new FormControl();
  this.mobileNumber= new FormControl();
  this.applicantDegree=new FormControl();
  this.applicantGraduationPercent= new FormControl();
  this.status=new FormControl();
  this.applicantForm= new FormGroup({
    'applicantId':this.applicantId,
    'applicantName':this.applicantName,
    'mobileNumber':this.mobileNumber,
    'applicantDegree':this.applicantDegree,
    'applicantGraduationPercent':this.applicantGraduationPercent,
    'status':this.status
  });
}
 addApplicant(applicant:Applicant):void{
 this.applicants.push(applicant);
 this.formSubmitted=true;
 console.log(this.applicants);

 }
*/
}
