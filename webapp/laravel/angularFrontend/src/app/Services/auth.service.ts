import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  register(data) {
    return this.http.post('http://localhost/api/register', data);
  }

  login(data) {
    return this.http.post('http://localhost/api/login', data);
  }
}
