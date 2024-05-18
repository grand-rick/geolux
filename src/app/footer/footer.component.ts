import { Component, inject, signal } from '@angular/core';
import { RouterLink } from '@angular/router';
import { Region } from '../models/region.model';
import { RegionsService } from '../services/regions/regions.service';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss',
})
export class FooterComponent {
  regions = signal<Region[]>([]);

  private regionsService = inject(RegionsService);

  ngOnInit() {
    this.getRegions();
  }

  getRegions(): void {
    this.regionsService.getRegions().subscribe((regions) => {
      this.regions.set(regions);
    });
  }
}
