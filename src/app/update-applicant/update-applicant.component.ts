import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicantserviceService } from '../applicantservice.service';
import { AdmissionStatus } from '../model/admissionStatus';
import { Applicant } from '../model/applicant';

@Component({
  selector: 'app-update-applicant',
  templateUrl: './update-applicant.component.html',
  styleUrls: ['./update-applicant.component.css']
})
export class UpdateApplicantComponent implements OnInit {

  submitted = false;
  searchapplicantId = '0';
  applicantId='0';
  status=['Pending','Applied'];
  showMsg=false;
errorMsg=null;
  applicantDetail:Applicant= new Applicant();;
  constructor(private activateRoute:ActivatedRoute,
    private applicantService: ApplicantserviceService) { }

  ngOnInit(): void {
    this.activateRoute.params.subscribe(data =>{
      this.searchapplicantId = data.applicantId;
      
      this.applicantService.viewApplicant(this.searchapplicantId).subscribe(applicantData =>{
        this.applicantDetail = applicantData;
      },
      error => {
      
        this.errorMsg=error.message});
    });
  }
  updateApplicant(){
    this.applicantService.updateApplicant(this.searchapplicantId,this.applicantDetail).subscribe(updatedata =>{
      console.log(updatedata);
      this.applicantDetail = new Applicant();
    },
    );
  }

  onSubmit() {
    this.submitted = true;
    this.showMsg=true;
    this.updateApplicant();}
  


}
