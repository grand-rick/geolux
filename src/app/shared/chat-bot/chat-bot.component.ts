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
import {
  FormBuilder,
  FormGroup,
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-chat-bot',
  standalone: true,
  imports: [
    MatDialogTitle,
    MatDialogContent,
    MatDialogActions,
    MatDialogClose,
    MatInputModule,
    MatFormFieldModule,
    ReactiveFormsModule,
    FormsModule,
    MatButtonModule,
  ],
  templateUrl: './chat-bot.component.html',
  styleUrl: './chat-bot.component.scss',
})
export class ChatBotComponent {
  constructor(
    private fb: FormBuilder,
    public dialogRef: MatDialogRef<LocationComponent>,
    @Inject(MAT_DIALOG_DATA) public data: UserDialogData
  ) {}

  chatForm: FormGroup = {} as FormGroup;

  ngOnInit() {
    this.chatForm = this.fb.group({
      message: [''],
    });
  }

  onNoClick(): void {
    this.dialogRef.close('cancel');
  }
}
