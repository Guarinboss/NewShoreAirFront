import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { JourneyPageComponent } from './pages/journey-page/journey-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatButtonToggleModule} from '@angular/material/button-toggle';
import {MatRadioModule} from '@angular/material/radio';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SearchFlightComponent } from './components/search-flight/search-flight.component';
import { FlightRoutesComponent } from './components/flight-routes/flight-routes.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';


@NgModule({
  declarations: [
    JourneyPageComponent,
    SearchFlightComponent,
    FlightRoutesComponent,    
  ],
  imports: [
    CommonModule, 
    SharedModule, 
    BrowserAnimationsModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatRadioModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule, 
    SharedModule
  ]
})
export class JourneyModule { }
