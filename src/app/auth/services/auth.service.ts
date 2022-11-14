import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
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
        tap(this.loadUser),
        map(resp => resp.ok),
        catchError((err: HttpErrorResponse) => of(err.error.msg))
      );
  }

  public validateToken(): Observable<boolean> {
    const url: string = `${this.baseUrl}/auth/renew`
    const headers = new HttpHeaders().set('token', localStorage.getItem('token') || '');

    return this.http.get<Response>(url, {headers})
      .pipe(
        map(resp => {
          this.loadUser(resp);
          return resp.ok;
        }),
        catchError(() => of(false))
      );
  }

  public createUser(name: string, email: string, password: string): Observable<boolean | string> {
    const url: string = `${this.baseUrl}/auth/user`

    const body = { name, email, password };

    return this.http.post<Response>(url, body)
      .pipe(
        tap(this.loadUser),
        map(resp => resp.ok),
        catchError((err: HttpErrorResponse) => of(err.error.msg))
      );
  }

  public logout(): void {
    localStorage.removeItem('token');
  }

  private loadUser (resp: Response): void {
    if (resp.ok) {
       localStorage.setItem('token', resp.token!);
       this._user =  {
        name: resp.name!,
        uid: resp.uid!
      }
    }
  }
}
