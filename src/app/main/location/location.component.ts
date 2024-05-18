import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { GoogleMapsModule } from '@angular/google-maps';
import { MatButtonModule } from '@angular/material/button';
import { MatDialog } from '@angular/material/dialog';
import { FirebaseService } from '../../services/auth/firebase.service';
import { ChatBotComponent } from '../../shared/chat-bot/chat-bot.component';

export interface UserDialogData {
  fullName: string;
}

@Component({
  selector: 'app-location',
  standalone: true,
  imports: [CommonModule, GoogleMapsModule, MatButtonModule],
  templateUrl: './location.component.html',
  styleUrl: './location.component.scss',
})
export class LocationComponent {
  constructor(public dialog: MatDialog, private auth: FirebaseService) {}

  fullName: string = '';

  openChatBotDialog(): void {
    this.fullName = this.auth.currentUserSig()?.name || '';

    const dialogRef = this.dialog.open(ChatBotComponent, {
      data: { fullName: this.fullName },
      disableClose: true,
      position: { bottom: '10px', right: '10px' },
    });

    dialogRef.afterClosed().subscribe({
      next: (result) => {
        console.log('The dialog was closed');
      },
      error: (error) => {
        console.error(error);
      },
    });
  }
}
