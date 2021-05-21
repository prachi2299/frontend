import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicantDeleteComponent } from './applicant-delete/applicant-delete.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { HomeComponent } from './home/home.component';
import { UpdateApplicantComponent } from './update-applicant/update-applicant.component';
import { ViewAllByStatusComponent } from './view-all-by-status/view-all-by-status.component';
import { ViewApplicantComponent } from './view-applicant/view-applicant.component';



const routes: Routes = [
  { path: 'applicants',component:ApplicantComponent},
  { path: 'applicants/delete/:applicantId',component:ApplicantDeleteComponent},
  { path: 'applicants/status/:status' , component:ViewAllByStatusComponent},
  { path: 'applicants/:applicantId' ,component:ViewApplicantComponent},
  { path: 'applicants/update/:applicantId' ,component:UpdateApplicantComponent},
  { path: '',component:HomeComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
