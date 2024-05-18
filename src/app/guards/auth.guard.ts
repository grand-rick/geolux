import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { first, map } from 'rxjs';
import { FirebaseService } from '../services/auth/firebase.service';

export const authGuard: CanActivateFn = (route, state) => {
  const router = inject(Router);
  const firebaseService = inject(FirebaseService);

  return firebaseService.user$.pipe(
    first(),
    map((user) => {
      if (user) return true;
      else {
        router.navigate(['/login'], {
          queryParams: { redirect_url: state.url },
        });
        return false;
      }
    })
  );
};
