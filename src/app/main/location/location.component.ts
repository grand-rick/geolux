import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule, MatButtonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  lat = 21.3069;
  lng = -157.8583;
  mapType = 'satellite';
}
