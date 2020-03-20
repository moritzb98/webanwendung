import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BilduploadService {

  constructor(private http: HttpClient) { }

  uploadImage(img: File) {
    const id = localStorage.getItem('id');
    const formData: FormData = new FormData();
    formData.append('image', img, img.name);
    const data = {
      fd: formData,
      userId: id
    };
    return this.http.post('http://localhost/api/pimg', formData);
  }
}
