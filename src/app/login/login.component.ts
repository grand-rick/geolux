import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { FirebaseService } from '../services/auth/firebase.service';
import { GlobalsService } from '../services/globals/globals.service';
import { NgxUiLoaderModule, SPINNER } from 'ngx-ui-loader';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, NgxUiLoaderModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
})
export class LoginComponent {
  SPINNER = SPINNER;
  private firebaseService = inject(FirebaseService);
  private globals = inject(GlobalsService);

  ngOnInit() {
    this.checkSession();
  }

  async checkSession() {
    if (this.firebaseService.currentUserSig()) {
      this.globals.toast.info('You are already logged in.');
      const redirectUrl =
        this.globals.route.snapshot.queryParams['redirect_url'];
      if (redirectUrl) {
        this.globals.router.navigateByUrl(redirectUrl);
      } else {
        this.globals.router.navigate(['/home']);
      }
    }
  }

  loginWithGoogle() {
    this.firebaseService.loginWithGoogle().subscribe({
      next: () => {
        const redirectUrl =
          this.globals.route.snapshot.queryParams['redirect_url'];
        if (redirectUrl) {
          this.globals.router.navigateByUrl(redirectUrl);
        } else {
          this.globals.router.navigate(['/home']);
        }
        this.globals.toast.success('Login successful!');
        this.globals.loader.stopAll();
      },
      error: (err) => {
        console.log(err);
        this.globals.loader.stopAll();
      },
      complete: () => {
        console.log('Logged in with Google!');
      },
    });
  }

  loginWithGithub() {
    this.firebaseService.loginWithGitHub().subscribe({
      next: () => {
        const redirectUrl =
          this.globals.route.snapshot.queryParams['redirect_url'];
        if (redirectUrl) {
          this.globals.router.navigateByUrl(redirectUrl);
        } else {
          this.globals.router.navigate(['/home']);
        }
        this.globals.toast.success('Login successful!');
        this.globals.loader.stopAll();
      },
      error: (err) => {
        console.log(err);
        this.globals.loader.stopAll();
      },
      complete: () => {
        console.log('Logged in with Github!');
      },
    });
  }
}
