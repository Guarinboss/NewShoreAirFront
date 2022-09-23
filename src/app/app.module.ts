import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/home/home.module';
import { JourneyModule } from './modules/journey/journey.module';
import { StoreModule } from '@ngrx/store';
import { ROOT_REDUCERS } from './state/app.state';
import { EffectsModule } from '@ngrx/effects';
import { FlightsEffects } from './state/effects/flights.effects';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HomeModule, 
    JourneyModule, 
    StoreModule.forRoot(ROOT_REDUCERS), EffectsModule.forRoot([FlightsEffects]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
