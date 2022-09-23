import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs/internal/Observable';
import { FlightModel } from 'src/app/core/models/flight.model';
import { AppState } from 'src/app/state/app.state';
import { selectFilteredFlights, selectListFlights } from 'src/app/state/selectors/flights.selector';
import { selectRoute } from 'src/app/state/selectors/route.selector';
import { SetRouteService } from '../../services/route/set-route.service';

@Component({
  selector: 'app-flight-routes',
  templateUrl: './flight-routes.component.html',
  styleUrls: ['./flight-routes.component.css']
})
export class FlightRoutesComponent implements OnInit {

  fligths!: any[];
  filteredFlights!: any[];
  public filterNull: boolean = false;
  currentCurrency!: string;

  routeData$: Observable<any> = new Observable();
  flights$: Observable<any> = new Observable();

  constructor(private store: Store<AppState>, private flightMatch: SetRouteService) {

  }

  ngOnInit(): void {
    this.getFLightsAvailable();
    this.getRouteTypedByUser();

  }

  getFLightsAvailable(): void {
    this.flights$ = this.store.select(selectListFlights);
    this.flights$.subscribe(flights => {
      this.fligths = flights;
      this.filteredFlights = flights; 
      this.filterNull = false;
    });
  }


  getRouteTypedByUser(): void {
    this.routeData$ = this.store.select(selectRoute);
    this.routeData$.subscribe(routeData => {
      this.filteredFlights = this.filterData(routeData);
      this.veririfyNull();
      this.currentCurrency = routeData.currency;
    });
   
  }

  filterData(routeData: any) {
    
    return this.fligths.filter((flight: any) => flight.departureStation === routeData.origin && flight.arrivalStation === routeData.destination);
  }

  veririfyNull(){
    if(this.filteredFlights.length != 0 ){
      this.filterNull = false;
    }
    else{
      this.filterNull = true;
    }
  }

}
