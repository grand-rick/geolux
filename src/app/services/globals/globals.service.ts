import { HttpClient } from '@angular/common/http';
import { Injectable, WritableSignal, inject, signal } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ToasterService } from './toaster.service';
import { NgxUiLoaderService } from 'ngx-ui-loader';

@Injectable({
  providedIn: 'root',
})
export class GlobalsService {
  public http = inject(HttpClient);
  public router = inject(Router);
  public route = inject(ActivatedRoute);
  public fb = inject(FormBuilder);
  public loader = inject(NgxUiLoaderService);
  public toast = inject(ToasterService);

  // currentUser: WritableSignal<UserModel | null | undefined> = signal(undefined);
}
