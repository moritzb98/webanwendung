import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BilduploadService {

  constructor(private http: HttpClient) { }

  uploadImage(img) {
    //this.http.post()
  }
}
