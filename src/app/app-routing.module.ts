import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './modules/home/pages/home-page/home-page.component';
import { JourneyPageComponent } from './modules/journey/pages/journey-page/journey-page.component';


const routes: Routes = [
  { path: 'home', component: HomePageComponent },
  { path: 'journey', component: JourneyPageComponent },
  { path: '', redirectTo: '/home', pathMatch: 'full' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
