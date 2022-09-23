import { createSelector } from '@ngrx/store';
import { FlightState } from 'src/app/core/models/flight.state';
import { AppState } from '../app.state';
 
export const selectFlightsFeature = (state: AppState) => state.flightsList;
 
export const selectListFlights = createSelector(
    selectFlightsFeature,
  (state: FlightState) => state.flights
);

export const selectFilteredFlights = createSelector(
  selectFlightsFeature,
(state: FlightState) => state
);

export const selectLoading = createSelector(
    selectFlightsFeature,
  (state: FlightState) => state.loading
);