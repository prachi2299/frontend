import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicantComponent } from './applicant/applicant.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApplicantDeleteComponent } from './applicant-delete/applicant-delete.component';
import { ViewAllByStatusComponent } from './view-all-by-status/view-all-by-status.component';
import { ViewApplicantComponent } from './view-applicant/view-applicant.component';
import { UpdateApplicantComponent } from './update-applicant/update-applicant.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    ApplicantComponent,
    
    ApplicantDeleteComponent,
    ViewAllByStatusComponent,
    ViewApplicantComponent,
    UpdateApplicantComponent,
    HomeComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
