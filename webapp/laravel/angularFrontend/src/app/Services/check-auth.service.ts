import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { AuthTokenService } from './auth-token.service';

@Injectable({
  providedIn: 'root'
})
export class CheckAuthService {
  private loggedIn = new BehaviorSubject < boolean >(this.token.loggedIn());
  public authStatus = this.loggedIn.asObservable();

  constructor(private token: AuthTokenService) { }

  changeAuthStatus(value: boolean) {
    this.loggedIn.next(value);
  }
}
