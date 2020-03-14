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

  setUserId(data) {
    localStorage.setItem('id', data);
  }

  set(token) {
    localStorage.setItem('token', token);
  }

  getVorname() {
    return localStorage.getItem('vorname');
  }

  getUserId() {
    return localStorage.getItem('id');
  }

  get() {
    return localStorage.getItem('token');
  }

  remove() {
    localStorage.removeItem('token');
    localStorage.removeItem('vorname');
    localStorage.removeItem('id');
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
