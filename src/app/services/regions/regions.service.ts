import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment.development';
import { Region } from '../../models/region.model';

@Injectable({
  providedIn: 'root',
})
export class RegionsService {
  baseUrl = environment.backendAPI;
  constructor(private http: HttpClient) {}

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(`${this.baseUrl}/regions`);
  }
}
