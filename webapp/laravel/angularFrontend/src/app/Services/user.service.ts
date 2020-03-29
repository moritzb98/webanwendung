import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUserData(id) {
    return this.http.get('http://localhost/api/getuserdata/' + id);
  }

  getUsers() {
    return this.http.get('http://localhost/api/getuserdata');
  }

  getUploadedImage(id) {
    return this.http.get('http://localhost/api/getpimg/' + id);
  }

  updateData(data) {
    return this.http.post('http://localhost/api/updateProfile', data);
  }

}
