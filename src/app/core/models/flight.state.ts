import { FlightModel } from "./flight.model";

export interface FlightState{
    loading: boolean, 
    flights: ReadonlyArray<FlightModel>,
    origin: string,
    destination: string, 
    price: number,
}