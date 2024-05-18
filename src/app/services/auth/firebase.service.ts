import { Injectable, inject, signal } from '@angular/core';
import {
  Auth,
  GithubAuthProvider,
  GoogleAuthProvider,
  signInWithPopup,
  user,
} from '@angular/fire/auth';
import { Observable, from } from 'rxjs';
import { UserModel } from '../../models/user.model';

@Injectable({
  providedIn: 'root',
})
export class FirebaseService {
  private firebaseAuth = inject(Auth);

  user$ = user(this.firebaseAuth);
  currentUserSig = signal<UserModel | null | undefined>(undefined);

  loginWithGoogle(): Observable<void> {
    const provider = new GoogleAuthProvider();
    const promise = signInWithPopup(this.firebaseAuth, provider).then((res) => {
      console.log('Google login 1', res);
      console.log('Google login 1', res.user.photoURL);
      return;
    });
    return from(promise);
  }

  loginWithGitHub(): Observable<void> {
    const provider = new GithubAuthProvider();
    const promise = signInWithPopup(this.firebaseAuth, provider).then((res) => {
      console.log('GitHub login 1', res);
      return;
    });
    return from(promise);
  }

  logout(): Observable<void> {
    const promise = this.firebaseAuth.signOut();
    return from(promise);
  }
}
