import { Routes } from '@angular/router';
import { HomeComponent } from './main/home/home.component';
import { authGuard } from './guards/auth.guard';
import { LocationComponent } from './main/location/location.component';

export const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full',
      },
      {
        path: 'home',
        component: HomeComponent,
      },
      {
        path: 'login',
        loadComponent: () =>
          import('./login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'location',
        canActivate: [authGuard],
        component: LocationComponent,
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./main/contact-us/contact-us.component').then(
            (m) => m.ContactUsComponent
          ),
      },
      {
        path: 'place/:region_id',
        loadComponent: () =>
          import('./main/places-region/places-region.component').then(
            (m) => m.PlacesRegionComponent
          ),
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
];
