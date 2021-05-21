import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicantserviceService } from '../applicantservice.service';
import { Applicant } from '../model/applicant';

@Component({
  selector: 'app-view-applicant',
  templateUrl: './view-applicant.component.html',
  styleUrls: ['./view-applicant.component.css']
})
export class ViewApplicantComponent implements OnInit {

  searchApplicantId='0';
  applicantId='0';
  errorMsg=null;
  applicantDetail:Applicant;
  constructor(
    private activatedRoute: ActivatedRoute,
    private applicantService: ApplicantserviceService
  ) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.searchApplicantId = data.applicantId;
   
    this.applicantService.viewApplicant(this.searchApplicantId).subscribe(applicantData => {
      this.applicantDetail = applicantData;
    },
    error => this.errorMsg=error.message
    );
  }
  );
  }

}
