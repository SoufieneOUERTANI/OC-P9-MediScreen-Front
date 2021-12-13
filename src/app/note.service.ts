import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private NotesBaseURL = "http://localhost:8082/notes"

  note!: Note;
  notes: Note[] = [];

  getNotes!: Note[];

  constructor(private httpClient: HttpClient) { }

  getPatientNotesListById(patientId: number): Observable<Note[]> {
    return this.httpClient.get<GetPatientNotes>(`${this.NotesBaseURL}/${patientId}`).pipe(map(response => response.commentList));
  }

  savePatientNoteService(id: number, notes: Note[]): Observable<Note> {
    const postPatientNotes = <PostPatientNotes>{
      patientId: id,
      commentList: notes
    }
    return this.httpClient.post<Note>(`${this.NotesBaseURL}`, postPatientNotes);
  }

}

interface GetPatientNotes {
  commentList: Note[];
}

interface PostPatientNotes {
  patientId: number;
  commentList: Note[];
}


