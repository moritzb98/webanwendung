import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserData() {
    return this.http.get('http://localhost/api/me');
  }

  getUploadedImage(id) {
    return this.http.get('http://localhost/api/getpimg/' + id);
  }
}
