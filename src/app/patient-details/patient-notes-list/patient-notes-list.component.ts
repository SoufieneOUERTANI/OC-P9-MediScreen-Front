import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
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

  constructor(private noteService: NoteService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.getPatientNotes();
  }
  getPatientNotes() {
    this.patientId = this.activatedRoute.snapshot.params['id'];
    console.log('getPatientNotes/this.patientId : ' + this.patientId);
    this.noteService.gePatienttNoteListById(this.patientId).subscribe(
      data => { console.log('getPatientNotes/data : ' + data); this.patientNotes = data },
      error => console.log(error)
    );
  }

}
