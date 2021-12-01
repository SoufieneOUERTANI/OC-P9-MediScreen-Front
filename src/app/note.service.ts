import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Note } from './note';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private baseURL = "http://localhost:8082/notes"

  constructor(private httpClient: HttpClient) { }

  gePatienttNoteListById(patientId: number): Observable<Note[]> {
    return this.httpClient.get<GetPatientNotes>(`${this.baseURL}/${patientId}`).pipe(map(response => response.commentList));
    //return this.httpClient.get<Note[]>(`${this.baseURL}/${patientId}`);

  }

}

interface GetPatientNotes {
  commentList: Note[];
}

