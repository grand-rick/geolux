import { CommonModule } from '@angular/common';
import { Component, WritableSignal, inject, signal } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { MatMenuModule } from '@angular/material/menu';
import { RouterLink } from '@angular/router';
import { FirebaseService } from '../services/auth/firebase.service';
import { GlobalsService } from '../services/globals/globals.service';
import { RegionsService } from '../services/regions/regions.service';
import { Region } from '../models/region.model';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    MatIconModule,
    MatButtonModule,
    MatToolbarModule,
    MatDividerModule,
    MatMenuModule,
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss',
})
export class HeaderComponent {
  isLoggedIn: WritableSignal<boolean> = signal(false);
  regions = signal<Region[]>([]);

  protected firebaseService = inject(FirebaseService);
  private globals = inject(GlobalsService);
  private regionsService = inject(RegionsService);

  ngOnInit() {
    this.firebaseService.user$.subscribe({
      next: (user) => {
        if (user) {
          this.isLoggedIn.set(true);
        } else {
          this.isLoggedIn.set(false);
        }
      },
    });

    this.getRegions();
  }

  getRegions(): void {
    this.regionsService.getRegions().subscribe((regions) => {
      this.regions.set(regions);
    });
  }

  logout() {
    this.firebaseService.logout();
    this.globals.toast.success('Logged out successfully');
  }
}
