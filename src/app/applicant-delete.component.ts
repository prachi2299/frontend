import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApplicantserviceService } from '../applicantservice.service';


@Component({
  selector: 'app-applicant-delete',
  templateUrl: './applicant-delete.component.html',
  styleUrls: ['./applicant-delete.component.css']
})
export class ApplicantDeleteComponent implements OnInit {
  errorMsg=null;
  searchApplicantId='0';
  constructor(private activatedRoute:ActivatedRoute,
    private applicantService:ApplicantserviceService) { }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data =>{
      this.searchApplicantId=data.applicantId;

      this.applicantService.deleteApplicant(this.searchApplicantId).subscribe(deleteData =>{{
        console.log('delete product');
      }},
      error => {
      
        this.errorMsg=error.message});
    });
  }

}
