import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class GetFligsService {
  urlFlig: string = 'https://restcountries.com/v3.1/all';
  urlregion: string = 'https://restcountries.com/v3.1/all?fields=region';
  urlregionCuntry: string = 'https://restcountries.com/v3.1/region/';
  urlCuntry: string = 'https://restcountries.com/v3.1/name/';
  constructor(private http: HttpClient) {}
  getFlig(): Observable<any[]> {
    // return this.http.get<any>(this.urlFlig);
    return this.http.get<any[]>(this.urlFlig);
  }
  getRegion(): Observable<any[]> {
    // return this.http.get<any>(this.urlFlig);
    return this.http.get<any[]>(this.urlregion);
  }
  getRegionCuntry(region: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlregionCuntry}${region}`);
  }
  getCuntry(cuntry: any): Observable<any[]> {
    return this.http.get<any[]>(`${this.urlCuntry}${cuntry}`);
  }
}
