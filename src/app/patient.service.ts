import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Patient } from './patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {

  private baseURL = "http://localhost:8081/patients"

  constructor(private httpClient: HttpClient) { }

  getPatientList(): Observable<Patient[]> {
    return this.httpClient.get<GetPatientsPages>(`${this.baseURL}`).pipe(map(response => response._embedded.patients));
  }

  createPatient(patient: Patient): Observable<Object> {
    return this.httpClient.post(`${this.baseURL}`, patient);
  }

  getPatientById(id: number): Observable<Patient> {
    return this.httpClient.get<Patient>(`${this.baseURL}/${id}`);
  }

  updatePatient(id: number, patient: Patient): Observable<Object> {
    return this.httpClient.put(`${this.baseURL}/${id}`, patient);
  }

  deletePatient(id: number): Observable<Object> {
    return this.httpClient.delete(`${this.baseURL}/${id}`);
  }


}

interface GetPatientsPages {
  _embedded: {
    patients: Patient[];
  },
  page: {
    size: number,
    totalElements: number,
    totalPages: number,
    number: number
  }
}
