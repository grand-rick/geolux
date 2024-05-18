import { Component, Inject } from '@angular/core';
import {
  MatDialogTitle,
  MatDialogContent,
  MatDialogActions,
  MatDialogClose,
  MAT_DIALOG_DATA,
  MatDialogRef,
} from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import {
  LocationComponent,
  UserDialogData,
} from '../../main/location/location.component';
import { MatFormFieldModule } from '@angular/material/form-field';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatFormFieldModule,
    MatButtonModule,
  ],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss',
})
export class ChatBotComponent {
  constructor(
    public dialogRef: MatDialogRef<LocationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserDialogData
  ) {}
  onNoClick(): void {
    this.dialogRef.close('cancel');
  }
}
