import { Injectable } from '@angular/core';
import { CanActivate, CanLoad, Router } from '@angular/router';
import { Observable, tap } from 'rxjs';
import { AuthService } from '../auth/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class ValidateTokenGuard implements CanActivate, CanLoad {

  constructor(private authService: AuthService, private router: Router) {}

  public canActivate(): Observable<boolean> | boolean {
    return this._validateToken();
  }

  public canLoad(): Observable<boolean> | boolean {
    return this._validateToken();
  }

  private _validateToken () : Observable<boolean> | boolean {
    return this.authService.validateToken()
      .pipe(tap(valid  => {
        if(!valid) {
          this.router.navigateByUrl('/auth');
        }
      }));
  }
}
