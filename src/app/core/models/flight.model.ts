import { TransportModel } from "./transport.model";

export interface FlightModel {
    transport?: TransportModel;
    origin?: string;
    destination?: string;
    price?: number;
}