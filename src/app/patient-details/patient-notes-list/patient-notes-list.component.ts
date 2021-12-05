import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/note';
import { NoteService } from 'src/app/note.service';

@Component({
  selector: 'app-patient-notes-list',
  templateUrl: './patient-notes-list.component.html',
  styleUrls: ['./patient-notes-list.component.css']
})
export class PatientNotesListComponent implements OnInit {

  patientId!: number;

  patientNotes!: Note[];

  constructor(private noteService: NoteService, private activatedRoute: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.getPatientNotes();
  }
  getPatientNotes() {
    this.patientId = this.activatedRoute.snapshot.params['id'];
    this.noteService.getPatienttNoteListById(this.patientId).subscribe(
      data => { this.patientNotes = data },
      error => console.log(error)
    );
  }

  onSubmitNoteAdd() {
    this.router.navigate(['create-patient-note', this.activatedRoute.snapshot.params['id']]);
  }

  deletePatientNote(note: Note) {
    note.actionFlag = "X";
    console.log("this.patientNotes.length : " + this.patientNotes.length);

    this.patientNotes.forEach((element, index) => {
      if (element.actionFlag == "X") this.patientNotes.splice(index, 1);
    });
    console.log("this.patientNotes.length : " + this.patientNotes.length);

    this.noteService.savePatientNoteService(this.activatedRoute.snapshot.params['id'], this.patientNotes).subscribe(
      data => { this.getPatientNotes(); }
    );
  }

  updatePatientNote(indexOfNote: number) {
    this.router.navigate(['update-patient-note', this.activatedRoute.snapshot.params['id'], indexOfNote], { state: { data: this.patientNotes, index: indexOfNote } });
  }
}
