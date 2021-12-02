import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseURL = "http://localhost:8080/notes"

  note!: Note;
  notes: Note[] = [];

  getNotes!: Note[];

  constructor(private httpClient: HttpClient) { }

  getPatienttNoteListById(patientId: number): Observable<Note[]> {
    return this.httpClient.get<GetPatientNotes>(`${this.baseURL}/${patientId}`).pipe(map(response => response.commentList));
  }

  createPatientNote(id: number, notes: Note[]): Observable<Note> {
    const postPatientNotes = <PostPatientNotes>{
      patientId: id,
      commentList: notes
    }
    return this.httpClient.post<Note>(`${this.baseURL}`, postPatientNotes);
  }

}

interface GetPatientNotes {
  commentList: Note[];
}

interface PostPatientNotes {
  patientId: number;
  commentList: Note[];
}


