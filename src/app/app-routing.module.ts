import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PatientListComponent } from './patient-list/patient-list.component';
import { CreatePatientComponent } from './create-patient/create-patient.component';
import { UpdatePatientComponent } from './update-patient/update-patient.component';
import { PatientDetailsComponent } from './patient-details/patient-details.component';
import { PatientNotesListComponent } from './patient-details/patient-notes-list/patient-notes-list.component';
import { CreatePatientNoteComponent } from './patient-details/create-patient-note/create-patient-note.component';

const routes: Routes = [
  { path: 'patients', component: PatientListComponent },
  { path: 'create-patient', component: CreatePatientComponent },
  { path: 'update-patient/:id', component: UpdatePatientComponent },
  { path: 'view-patient/:id', component: PatientDetailsComponent },
  { path: 'notes/:id', component: PatientNotesListComponent },
  { path: 'create-patient-note/:id', component: CreatePatientNoteComponent },
  { path: '', redirectTo: 'patients', pathMatch: 'full' }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
