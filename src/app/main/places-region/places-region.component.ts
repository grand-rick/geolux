import {
  Component,
  Input,
  WritableSignal,
  effect,
  signal,
} from '@angular/core';
import { Place } from '../../models/place.model';
import { PlaceService } from '../../services/place/place.service';
import { CommonModule } from '@angular/common';
import { PlaceCardComponent } from '../../shared/place-card/place-card.component';

@Component({
  selector: 'app-places-region',
  standalone: true,
  imports: [CommonModule, PlaceCardComponent],
  templateUrl: './places-region.component.html',
  styleUrl: './places-region.component.scss',
})
export class PlacesRegionComponent {
  @Input() region_id: string = '';

  placesByRegion: WritableSignal<Place[]> = signal([]);

  constructor(private placeService: PlaceService) {}

  ngOnInit() {
    this.placeService.getPlaceByRegion(parseInt(this.region_id)).subscribe({
      next: (places: Place[]) => {
        this.placesByRegion.set(places);
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
