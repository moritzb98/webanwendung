import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthTokenService {
  private iss = {
    login: 'http://localhost/api/login',
    register: 'http://localhost/api/register'
  };
  http: any;

  constructor() { }

  handle(token) {
    this.set(token);
  }

  setUser(data) {
    localStorage.setItem('vorname', data);
  }

  set(token) {
    localStorage.setItem('token', token);
  }

  getVorname() {
    return localStorage.getItem('vorname');
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
    localStorage.removeItem('vorname');
  }

  isValid() {
    const token = this.get();
    if (token) {
      const payload = this.payload(token);
      if (payload) {
        return Object.values(this.iss).indexOf(payload.iss) > -1 ? true : false;
      }
    }
    return false;
  }

  payload(token) {
    const payload = token.split('.')[1];
    return this.decode(payload);
  }

  decode(payload) {
    return JSON.parse(atob(payload));
  }

  loggedIn() {
    return this.isValid();
  }
}
