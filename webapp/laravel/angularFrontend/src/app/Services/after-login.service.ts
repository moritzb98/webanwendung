import { Injectable } from '@angular/core';
import { CanActivate } from '@angular/router';
import { AuthTokenService } from './auth-token.service';

@Injectable({
  providedIn: 'root'
})
export class AfterLoginService implements CanActivate {
  // tslint:disable-next-line:max-line-length
  canActivate(route: import('@angular/router').ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot): boolean | import('@angular/router').UrlTree | import('rxjs').Observable<boolean | import('@angular/router').UrlTree> | Promise<boolean | import('@angular/router').UrlTree> {
    return this.token.loggedIn();
  }

  constructor(private token: AuthTokenService) { }
}
