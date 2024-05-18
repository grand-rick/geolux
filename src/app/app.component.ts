import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { GlobalsService } from './services/globals/globals.service';
import { FirebaseService } from './services/auth/firebase.service';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, HeaderComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'hotelux';
  private globals = inject(GlobalsService);
  private destroyRef = inject(DestroyRef);
  private firebaseService = inject(FirebaseService);

  ngOnInit() {
    this.globals.loader.start();
    this.firebaseService.user$
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe({
        next: (user) => {
          if (user) {
            console.log('User', user);
            this.firebaseService.currentUserSig.set({
              id: user.uid,
              email: user?.email!,
              name: user?.displayName!,
              photoURL: user?.photoURL!,
              createdAt: user?.metadata?.creationTime!,
              updatedAt: user?.metadata?.lastSignInTime!,
            });
            console.log('Firebase', this.firebaseService.currentUserSig());
          } else {
            this.firebaseService.currentUserSig.set(null);
          }
        },
      });

    setTimeout(() => {
      this.globals.loader.stopAll();
    }, 3000);
  }
}
