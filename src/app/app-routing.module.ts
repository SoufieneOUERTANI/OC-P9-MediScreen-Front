import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientNotesListComponent } from './patient-details/patient-notes-list/patient-notes-list.component';
import { CreatePatientNoteComponent } from './patient-details/create-patient-note/create-patient-note.component';
import { UpdatePatientNoteComponent } from './patient-details/update-patient-note/update-patient-note.component';
import { PatientDiabetesRiskReportComponent } from './patient-diabetes-risk/patient-diabetes-risk-report/patient-diabetes-risk-report.component';
import { OktaAuthGuard, OktaCallbackComponent } from '@okta/okta-angular';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: 'login/callback', component: OktaCallbackComponent },
  { path: 'login', component: LoginComponent },

  {
    path: 'patients',
    component: PatientListComponent,
    canActivate: [OktaAuthGuard],
  },
  {
    path: 'create-patient',
    component: CreatePatientComponent,
    canActivate: [OktaAuthGuard],
  },
  {
    path: 'update-patient/:id',
    component: UpdatePatientComponent,
    canActivate: [OktaAuthGuard],
  },
  {
    path: 'details-patient/:id',
    component: PatientDetailsComponent,
    canActivate: [OktaAuthGuard],
  },
  {
    path: 'notes/:id',
    component: PatientNotesListComponent,
    canActivate: [OktaAuthGuard],
  },
  {
    path: 'create-patient-note/:id',
    component: CreatePatientNoteComponent,
    canActivate: [OktaAuthGuard],
  },
  {
    path: 'update-patient-note/:id/:index',
    component: UpdatePatientNoteComponent,
    canActivate: [OktaAuthGuard],
  },
  {
    path: 'patient-diabetes-risk-report/:id',
    component: PatientDiabetesRiskReportComponent,
    canActivate: [OktaAuthGuard],
  },
  { path: '', redirectTo: 'patients', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
