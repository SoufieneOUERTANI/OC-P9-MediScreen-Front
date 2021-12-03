import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Note } from 'src/app/note';
import { NoteService } from 'src/app/note.service';

@Component({
  selector: 'app-create-patient-note',
  templateUrl: './create-patient-note.component.html',
  styleUrls: ['./create-patient-note.component.css']
})
export class CreatePatientNoteComponent implements OnInit {

  patientId!: number;
  note: Note = new Note();
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

  onSubmitAddComment(): void {
    this.getPatientNotes();
    if (this.note.comment.trim().length > 0) {
      if (this.patientNotes == null) {
        this.patientNotes = [this.note];
      }
      else {
        this.patientNotes.unshift(this.note);
      }
      this.noteService.savePatientNoteService(this.activatedRoute.snapshot.params['id'], this.patientNotes).subscribe(
        data => {
          this.getPatientNotes();
          this.goToNoteList();
        },
        error => { console.log(error) }
      );
    }
  }

  goToNoteList() {
    this.router.navigate(['view-patient', this.activatedRoute.snapshot.params['id']]).then(() => {
      window.location.reload();
    });
  }

}
