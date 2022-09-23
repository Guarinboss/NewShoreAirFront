import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CurrencyExchangePipe } from './pipes/currency-exchange.pipe';


@NgModule({
  declarations: [
    CurrencyExchangePipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    CurrencyExchangePipe
  ],
})
export class SharedModule { }
