import { CommonModule } from '@angular/common';
import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Place } from '../../models/place.model';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'place-card',
  standalone: true,
  imports: [CommonModule, RouterLink, MatButtonModule],
  templateUrl: './place-card.component.html',
  styleUrl: './place-card.component.scss',
})
export class PlaceCardComponent {
  place = input.required<Place>();
}
