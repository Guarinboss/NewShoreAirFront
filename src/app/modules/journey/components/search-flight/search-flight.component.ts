import { Component, OnInit } from '@angular/core';
import { FlightModel } from 'src/app/core/models/flight.model';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { loadedRoute } from 'src/app/state/actions/route.actions';
import { Observable } from 'rxjs/internal/Observable';
import { selectRoute } from 'src/app/state/selectors/route.selector';
import { RouteState } from 'src/app/core/models/route.state';
import { validateDifferent } from './search.validator';




@Component({
  selector: 'app-search-flight',
  templateUrl: './search-flight.component.html',
  styleUrls: ['./search-flight.component.css']
})
export class SearchFlightComponent implements OnInit {
  journeyForm: FormGroup;

  currencyControl = new FormControl('');
  routes!: RouteState;
  public flighsData!: FlightModel[];

  routeData$: Observable<any> = new Observable();
  currencyData$: Observable<any> = new Observable();
  loading$: Observable<boolean> = new Observable();

  constructor(private store: Store<any>) {


    this.journeyForm = new FormGroup({
      origin: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern('^[A-Z]+$')]),
      destination: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern('^[A-Z]+$')]),
      currency: new FormControl('', [Validators.required, Validators.maxLength(3), Validators.pattern('^[A-Z]+$')]),
    },{validators : validateDifferent}
    );
  }

  ngOnInit(): void {

  }


  setRoute(): void {
    this.store.dispatch(loadedRoute(this.journeyForm.value));
    this.routeData$ = this.store.select(selectRoute);
  }

  setCurrency(currency: string): void {
    localStorage.setItem('currency', currency);

  }

  validateIfEqual():  boolean  {
    return  this.journeyForm.hasError('isEqual')  &&
      this.journeyForm.get('origin')!.dirty &&
      this.journeyForm.get('destination')!.dirty;
  }

}
