import { CommonModule } from '@angular/common';
import { Component, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { Testimonial } from '../../../models/testimonial.model';
import { TestimonialService } from '../../../services/testimonial/testimonial.service';

@Component({
  selector: 'testimonials',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './testimonials.component.html',
  styleUrl: './testimonials.component.scss',
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class TestimonialsComponent {
  isLoading: boolean = true;
  testimonials: Testimonial[] = [];

  constructor(private testimonialService: TestimonialService) {}

  ngOnInit() {
    this.testimonialService.getTestimonials().subscribe((testimonials) => {
      this.testimonials = testimonials;
      this.isLoading = false;
    });
  }
}
