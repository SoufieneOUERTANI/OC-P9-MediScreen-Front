import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-create-patient',
  templateUrl: './create-patient.component.html',
  styleUrls: ['./create-patient.component.css']
})
export class CreatePatientComponent implements OnInit {

  patient: Patient = new Patient();

  constructor(private patientService: PatientService, private router: Router) { }

  ngOnInit(): void {
  }

  savePatient(): void {
    this.patientService.createPatient(this.patient).subscribe(
      data => {
        this.goToPatientsList();
      },
      error => { console.log(error) }
    );
  }
  goToPatientsList() {
    this.router.navigate(['patients']);
  }

  onSubmitCreation(): void {
    this.savePatient();
  }

}
