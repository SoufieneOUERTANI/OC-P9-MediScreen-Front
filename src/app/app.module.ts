import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { FormsModule } from '@angular/forms';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientNotesListComponent } from './patient-details/patient-notes-list/patient-notes-list.component';
import { CreatePatientNoteComponent } from './patient-details/create-patient-note/create-patient-note.component';
import { RouterModule } from '@angular/router';
import { UpdatePatientNoteComponent } from './patient-details/update-patient-note/update-patient-note.component';
import { PatientDiabetesRiskReportComponent } from './patient-diabetes-risk/patient-diabetes-risk-report/patient-diabetes-risk-report.component';
import { LoginComponent } from './components/login/login.component';
import { LoginStatusComponent } from './components/login-status/login-status.component';
@NgModule({
  declarations: [
    AppComponent,
    PatientListComponent,
    CreatePatientComponent,
    UpdatePatientComponent,
    PatientDetailsComponent,
    PatientNotesListComponent,
    CreatePatientNoteComponent,
    UpdatePatientNoteComponent,
    PatientDiabetesRiskReportComponent,
    LoginComponent,
    LoginStatusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
