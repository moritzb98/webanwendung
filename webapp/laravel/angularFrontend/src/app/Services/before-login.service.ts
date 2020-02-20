import { Injectable } from '@angular/core';
import { AuthTokenService } from './auth-token.service';
import { CanActivate } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class BeforeLoginService implements CanActivate {
  // tslint:disable-next-line:max-line-length
  canActivate(route: import('@angular/router').ActivatedRouteSnapshot, state: import('@angular/router').RouterStateSnapshot): boolean | import('@angular/router').UrlTree | import('rxjs').Observable<boolean | import('@angular/router').UrlTree> | Promise<boolean | import('@angular/router').UrlTree> {
    return !this.token.loggedIn();
  }

  constructor(private token: AuthTokenService) { }
}
