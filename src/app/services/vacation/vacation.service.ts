import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class VacationService {

  private apiUrl = 'http://localhost:3000/api/vacations/add';
  private Url = 'http://localhost:3000/api/vacations';


  constructor(private http: HttpClient) { }

  // Function to add a vacation request
  addVacation(vacationData: any): Observable<any> {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    return this.http.post(this.apiUrl, vacationData, { headers });
  }


  getVacations(): Observable<any[]> {
    return this.http.get<any[]>(this.Url + '/get-all');
  }

  // Fetch vacation counts by state from the API
  getVacationCounts(): Observable<any> {
    return this.http.get(this.Url + '/vacation-counts');
  }
}