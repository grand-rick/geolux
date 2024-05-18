import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { BannersComponent } from './banners/banners.component';
import { TestimonialsComponent } from './testimonials/testimonials.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [CommonModule, BannersComponent, TestimonialsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent {}
