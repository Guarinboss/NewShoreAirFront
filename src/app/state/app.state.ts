import { ActionReducerMap } from "@ngrx/store";
import { FlightState } from "../core/models/flight.state";
import { RouteState } from "../core/models/route.state";
import { flightsReducer } from "./reducers/flights.reducers";
import { routeReducer } from "./reducers/route.reducer";

export interface AppState {
  flightsList: FlightState,
  route : RouteState,
}

export const ROOT_REDUCERS: ActionReducerMap<AppState> = {
    flightsList: flightsReducer,
    route: routeReducer,

}; 