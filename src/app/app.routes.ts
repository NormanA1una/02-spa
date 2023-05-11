import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';

export const APP_ROUTES: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', pathMatch: 'full', redirectTo: 'home' },
];

export const APP_ROUNTING = RouterModule.forRoot(APP_ROUTES);
