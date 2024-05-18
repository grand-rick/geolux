import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA, signal } from '@angular/core';
import { PlaceService } from '../../../services/place/place.service';
import { Place } from '../../../models/place.model';
import { MatButtonModule } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'banners',
  standalone: true,
  imports: [CommonModule, MatButtonModule, RouterLink],
  templateUrl: './banners.component.html',
  styleUrl: './banners.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class BannersComponent {
  isLoading = signal(true);
  banners: Place[] = [];

  constructor(private placeService: PlaceService) {}

  ngOnInit() {
    this.placeService.getPlaces().subscribe({
      next: (places) => {
        this.banners = places;
        this.isLoading.set(false);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
