import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<Response> {
    const url: string = `${this.baseUrl}/auth`

    const body = { email, password };

    return this.http.post<Response>(url, body);
  }
}
