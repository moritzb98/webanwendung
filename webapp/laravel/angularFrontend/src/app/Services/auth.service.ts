import { AuthTokenService } from './auth-token.service';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private token: AuthTokenService) { }

  register(data) {
    return this.http.post('http://localhost/api/register', data);
  }

  login(data) {
    this.http.post('http://localhost/api/login', data).subscribe(
      // tslint:disable-next-line:no-shadowed-variable
      data => {
        this.token.setUser(data.user);
        this.token.setUserId(data.user);
      },
      err => {
        console.log(err);
      }
    );
    return this.http.post('http://localhost/api/login', data);
  }
}
