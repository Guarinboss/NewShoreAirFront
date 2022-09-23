import { Pipe, PipeTransform } from '@angular/core';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { selectCurrency } from 'src/app/state/selectors/route.selector';
import { ConvertCurrencyService } from '../services/convert-currency.service';

@Pipe({
  name: 'currencyExchange'
})
export class CurrencyExchangePipe implements PipeTransform {

  currency: any;
  routeData$: Observable<any> = new Observable();

  constructor(private convertCurrency: ConvertCurrencyService, private store: Store<any>){
    this.routeData$ = this.store.select(selectCurrency);
    this.routeData$.subscribe(data => { 
      this.currency=data;
    });
  }

  transform(value: number): any {
    if (this.currency === 'COP') {
      return this.convertCurrency.convertCOP(value);
    }
    if (this.currency === 'YEN') {
      return this.convertCurrency.convertYEN(value);
    }
    if (this.currency === 'USD') {
      return this.convertCurrency.convertUSD(value);
    }
    else{
      return this.convertCurrency.convertUSD(value);
    }
  }

 

}
