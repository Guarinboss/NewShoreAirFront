import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { EMPTY } from 'rxjs';
import { map, mergeMap, catchError } from 'rxjs/operators';
import { JourneyService } from 'src/app/modules/journey/services/journey.service';

 
@Injectable()
export class FlightsEffects {
 
 loadFlights$ = createEffect(() => this.actions$.pipe(
    
    ofType('[Flights List] load Flights'),
    mergeMap(() => this.journeyService.getFightsFromNewShore()
      .pipe(
        map(flights => ( { type: '[Flights List] loaded success', flights })),
        catchError(() => EMPTY)
      ))
    )
  );

  /*loadFilteredFlights$ = createEffect(() => this.actions$.pipe(
    ofType('[Flights List] load Flights'),
    mergeMap(() => this.journeyService.getFightsFromNewShore()
      .pipe(
        map((flights : any) => ({ type: '[Flights List filtered] filtered success', flights, destination:flights[1].departureStation, origin: flights.arrivalStation, price: flights.price })),
        catchError(() => EMPTY)
      ))
    ) 
  );*/
 
  constructor(
    private actions$: Actions,
    private journeyService: JourneyService
    
    ) {}
}