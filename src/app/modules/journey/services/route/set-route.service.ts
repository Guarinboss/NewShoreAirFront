import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SetRouteService {


  constructor() { }


  findFlights(flights: any, origin: any, destination: any) {

    let filteredFlights = flights.filter((flight: any) => flight.departureStation === origin && flight.arrivalStation === destination);

  /*  let originMatch = this.fligths.filter(fligth => fligth.departureStation === routeData.origin);

    let destinationMatch = this.fligths.filter(fligth => fligth.arrivalStation === routeData.destination);

    destinationMatch.forEach(fligths => {
      let scalingMatch = originMatch.filter(fligth => fligth.arrivalStation === fligths.departureStation);
      if (scalingMatch != null) {
        this.arrayRoutesOrigin.push(scalingMatch);
      }

    });

    originMatch.forEach(fligths => {
      let scalingMatch = destinationMatch.filter(fligth => fligth.departureStation === fligths.arrivalStation);
      if (scalingMatch != null) {
        this.arrayRoutesDestination.push(scalingMatch);
      }
    });

    console.log(this.arrayRoutesOrigin);
    console.log(this.arrayRoutesDestination);

    //console.log(scalingMatch);
    //console.log(filteredFlights);*/
  }


}
