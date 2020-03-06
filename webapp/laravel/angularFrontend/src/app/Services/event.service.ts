import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) { }

  createEvent(data) {
    return this.http.post('http://localhost/api/createEvent', data);
  }

  getEvents() {
    return this.http.get('http://localhost/api/events');
  }
}
