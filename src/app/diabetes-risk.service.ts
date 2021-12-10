import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DiabetesRiskService {

  private AssetsBaseURL = "http://localhost:8082/assets"

  constructor(private httpClient: HttpClient) { }

  getPatientDiabetesRiskById(patientId: number): Observable<string> {
    return this.httpClient.get<PatientDiabetesRisk>(`${this.AssetsBaseURL}/${patientId}`).pipe(map(response => response.patientDiabetesRisk));
  }

}

interface PatientDiabetesRisk {
    "patientDiabetesRisk": string;
}