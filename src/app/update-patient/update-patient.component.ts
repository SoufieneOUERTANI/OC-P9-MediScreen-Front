import { Route } from '@angular/compiler/src/core';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Patient } from '../patient';
import { PatientService } from '../patient.service';

@Component({
  selector: 'app-update-patient',
  templateUrl: './update-patient.component.html',
  styleUrls: ['./update-patient.component.css']
})
export class UpdatePatientComponent implements OnInit {

  id!: number;
  patient: Patient = new Patient();

  constructor(private patientService: PatientService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.id = this.activatedRoute.snapshot.params['id'];
    this.patientService.getPatientById(this.id).subscribe(
      data => { this.patient = data },
      error => console.log(error)
    );
  }

  updatePatient(): void {
    this.patientService.updatePatient(this.patient.patientId, this.patient).subscribe(
      data => {
        console.log(data);
        this.goToPatientsList();
      },
      error => { console.log(error) }
    );
  }
  goToPatientsList() {
    this.router.navigate(['patients']);
  }

  onSubmitUpdate(): void {
    console.log(this.patient);
    this.updatePatient();
  }

}
