import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Response, User } from '../interfaces/auth.interfaces';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl: string = environment.baseUrl;
  private _user!: User;

  get user(): User {
    return {...this._user};
  }

  constructor(private http: HttpClient) {}

  public login(email: string, password: string): Observable<boolean | string> {
    const url: string = `${this.baseUrl}/auth`

    const body = { email, password };

    return this.http.post<Response>(url, body)
      .pipe(
        tap(resp => {
          if (resp.ok) {
             this._user =  {
              name: resp.name!,
              uid: resp.uid!
            }
          }
        }),
        map(resp => resp.ok),
        catchError((err:HttpErrorResponse) => of(err.error.msg))
      );
  }
}
