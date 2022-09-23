import { createAction, props } from '@ngrx/store';
import { FlightModel } from 'src/app/core/models/flight.model';

 
export const loadFlights = createAction(
  '[Flights List] load Flights'
);
 
export const loadedFlights = createAction(
    '[Flights List] loaded success',
  props<{ flights: FlightModel[] }>()
);

export const loadedFileteredFlights = createAction(
  '[Flights List filtered] filtered success',
props<{ flights: FlightModel[], origin: string, destination: string, price: number }>()
);
 