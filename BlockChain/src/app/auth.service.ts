import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Model } from 'mongoose';
import { Data } from './data.model';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private baseUrl = 'http://127.0.0.1:3000/api';
  constructor(private http: HttpClient) {}

  sub(data: Data): Observable<any> {
    const url = `${this.baseUrl}/sub`;
    return this.http.post(url, data);
  }
}
