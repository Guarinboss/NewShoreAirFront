import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable, map } from "rxjs";
import { FlightModel } from 'src/app/core/models/flight.model';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class JourneyService {

  private readonly apiUrlFlights = `${environment.apiUrl}/flights`; 

  constructor(private http: HttpClient) { }

  public getFightsFromNewShore(): Observable<FlightModel[]> {
    return this.http.get<FlightModel[]>(this.apiUrlFlights + '/2');
  }
}
