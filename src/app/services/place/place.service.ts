import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Place } from '../../models/place.model';
import { environment } from '../../../environments/environment.development';

@Injectable({
  providedIn: 'root',
})
export class PlaceService {
  baseUrl = environment.backendAPI;

  constructor(private http: HttpClient) {}

  getPlaces(): Observable<Place[]> {
    return this.http.get<Place[]>(`${this.baseUrl}/places`);
  }

  getPlaceById(id: string): Observable<Place> {
    return this.http.get<Place>(`${this.baseUrl}/place/${id}`);
  }

  getPlaceByRegion(region_id: number): Observable<Place[]> {
    return this.http.get<Place[]>(`${this.baseUrl}/place/region/${region_id}`);
  }
}
