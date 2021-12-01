import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PatientNotesListComponent } from './patient-notes-list.component';

describe('PatientNotesListComponent', () => {
  let component: PatientNotesListComponent;
  let fixture: ComponentFixture<PatientNotesListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PatientNotesListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PatientNotesListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
