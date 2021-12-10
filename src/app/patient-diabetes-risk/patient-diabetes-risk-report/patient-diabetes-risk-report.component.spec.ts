import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientDiabetesRiskReportComponent } from './patient-diabetes-risk-report.component';

describe('PatientDiabetesRiskReportComponent', () => {
  let component: PatientDiabetesRiskReportComponent;
  let fixture: ComponentFixture<PatientDiabetesRiskReportComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientDiabetesRiskReportComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientDiabetesRiskReportComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
