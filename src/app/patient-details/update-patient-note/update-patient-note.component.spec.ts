import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdatePatientNoteComponent } from './update-patient-note.component';

describe('UpdatePatientNoteComponent', () => {
  let component: UpdatePatientNoteComponent;
  let fixture: ComponentFixture<UpdatePatientNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdatePatientNoteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdatePatientNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
