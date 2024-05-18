import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard } from '../guards/auth.guard';
import { LocationComponent } from './location/location.component';

const routes: Routes = [
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
        loadComponent: () =>
          import('./home/home.component').then((m) => m.HomeComponent),
      },
      {
        path: 'login',
        loadComponent: () =>
          import('../login/login.component').then((m) => m.LoginComponent),
      },
      {
        path: 'location',
        canActivate: [authGuard],
        component: LocationComponent,
      },
      {
        path: 'contact-us',
        loadComponent: () =>
          import('./contact-us/contact-us.component').then(
            (m) => m.ContactUsComponent
          ),
      },
      {
        path: 'place/:region_id',
        loadComponent: () =>
          import('./places-region/places-region.component').then(
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

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class MainModule {}
