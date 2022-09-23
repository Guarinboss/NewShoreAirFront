import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { FlightModel } from 'src/app/core/models/flight.model';


import { loadedFlights, loadFlights } from 'src/app/state/actions/flights.actions';
import { selectLoading } from 'src/app/state/selectors/flights.selector';
import { JourneyService } from '../../services/journey.service';

@Component({
  selector: 'app-journey-page',
  templateUrl: './journey-page.component.html',
  styleUrls: ['./journey-page.component.css']
})
export class JourneyPageComponent implements OnInit {

  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store<any>) { }

  ngOnInit(): void {
    this.loading$ = this.store.select(selectLoading);
    this.store.dispatch(loadFlights()); 
    
  }

}
