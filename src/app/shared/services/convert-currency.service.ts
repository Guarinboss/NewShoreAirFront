import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ConvertCurrencyService {

  constructor() { }

  convertCOP(value: number): Promise<number> {
    return new Promise<number>(resolve => {
      setTimeout(() => resolve(value * 4453), 1) });
  }

  convertYEN(value: number): Promise<number> {
    return new Promise<number>(resolve => {
      setTimeout(() => resolve(value * 143), 1) });
  }

  convertUSD(value: number): Promise<number> {
    return new Promise<number>(resolve => {
      setTimeout(() => resolve(value * 1), 1) });
  }
}
