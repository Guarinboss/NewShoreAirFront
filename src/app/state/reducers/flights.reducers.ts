import { createReducer, on } from '@ngrx/store';
import { FlightState } from 'src/app/core/models/flight.state';
import { loadedFileteredFlights, loadedFlights, loadFlights } from '../actions/flights.actions';


export const initialState: FlightState = {
  loading: false,
  flights: [],
  destination: "",
  origin: "",
  price: 0
};

export const flightsReducer = createReducer(
  initialState,
  on(loadFlights, (state) => {
    return { ...state, loading: true }
  }),
  on(loadedFlights, (state, { flights }) => {
    return { ...state, loading: false, flights }
  }),
  on(loadedFileteredFlights, (state, { flights, destination, origin, price }) => {
    return { ...state, loading: false, flights, destination, origin, price}
  })
);