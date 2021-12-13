import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/note';
import { NoteService } from 'src/app/note.service';

@Component({
  selector: 'app-update-patient-note',
  templateUrl: './update-patient-note.component.html',
  styleUrls: ['./update-patient-note.component.css'],
})
export class UpdatePatientNoteComponent implements OnInit {
  note!: Note;
  initialNote!: Note;
  indexOfNote!: number;
  patientId!: number;
  patientNotes!: Note[];

  constructor(
    private noteService: NoteService,
    private activatedRoute: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.patientNotes = history.state.data;
    this.indexOfNote = history.state.index;
    this.initialNote = this.patientNotes[this.indexOfNote];
    this.note = this.initialNote;
    console.log('this.note.comment : ' + this.note.comment);
    console.log('this.note : ' + this.indexOfNote);
  }

  getPatientNotes() {
    this.patientId = this.activatedRoute.snapshot.params['id'];
    this.noteService.getPatientNotesListById(this.patientId).subscribe(
      (data) => {
        this.patientNotes = data;
        console.log(
          '====>this.patientNotes.length : ' + this.patientNotes.length
        );
      },
      (error) => console.log(error)
    );
  }

  onSubmitUpdateComment(): void {
    if (this.note.comment.trim().length > 0) {
      if (this.patientNotes == null) {
        this.patientNotes = [this.note];
      } else {
        this.patientNotes[this.indexOfNote] = this.note;
      }
      this.noteService
        .savePatientNoteService(
          this.activatedRoute.snapshot.params['id'],
          this.patientNotes
        )
        .subscribe(
          (data) => {
            this.getPatientNotes();
            this.goToNoteList();
          },
          (error) => {
            console.log(error);
          }
        );
    }
  }

  goToNoteList() {
    this.router
      .navigate(['details-patient', this.activatedRoute.snapshot.params['id']])
      .then(() => {
        window.location.reload();
      });
  }
}
