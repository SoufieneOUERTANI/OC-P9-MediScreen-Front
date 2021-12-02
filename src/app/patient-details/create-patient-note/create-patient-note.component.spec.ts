import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreatePatientNoteComponent } from './create-patient-note.component';

describe('CreatePatientNoteComponent', () => {
  let component: CreatePatientNoteComponent;
  let fixture: ComponentFixture<CreatePatientNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreatePatientNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreatePatientNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
