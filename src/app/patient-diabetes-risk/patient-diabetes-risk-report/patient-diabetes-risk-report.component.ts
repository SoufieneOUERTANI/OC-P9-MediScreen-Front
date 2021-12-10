import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DiabetesRiskService } from 'src/app/diabetes-risk.service';

@Component({
  selector: 'app-patient-diabetes-risk-report',
  templateUrl: './patient-diabetes-risk-report.component.html',
  styleUrls: ['./patient-diabetes-risk-report.component.css']
})
export class PatientDiabetesRiskReportComponent implements OnInit {

  patientId!: number;

  patientDiabetesRisk! : string;

  constructor(private diabetesRiskService: DiabetesRiskService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.patientId = this.activatedRoute.snapshot.params['id'];
    console.log("this.patientId : "+this.patientId);
    this.diabetesRiskService.getPatientDiabetesRiskById(this.patientId).subscribe(
      data => { 
        console.log("data : "+data);

        this.patientDiabetesRisk = data;     
        console.log("this.patientDiabetesRisk : "+this.patientDiabetesRisk);
    },
      error => console.log(error)
    );
  }

}
