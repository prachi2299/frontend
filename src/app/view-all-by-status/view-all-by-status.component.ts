import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicantserviceService } from '../applicantservice.service';
import { AdmissionStatus } from '../model/admissionStatus';
import { Applicant } from '../model/applicant';

@Component({
  selector: 'app-view-all-by-status',
  templateUrl: './view-all-by-status.component.html',
  styleUrls: ['./view-all-by-status.component.css']
})
export class ViewAllByStatusComponent implements OnInit {

  searchStatus:AdmissionStatus;
  applicantList:Applicant;
  constructor(private activatedRoute:ActivatedRoute, private applicantService:ApplicantserviceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.searchStatus=data.status;
    
      this.applicantService.viewAllApplicantsByStatus(this.searchStatus).subscribe(statusData =>{
        this.applicantList=statusData;
      });
    });
  }

  

}
