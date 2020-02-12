import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  HttpHeaders,
  HttpErrorResponse
} from '@angular/common/http';
import { catchError, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
  data: any;

  constructor(private http: HttpClient) { 
  }

  getUsers(): Observable<any>{
    return this.http.get('http://localhost/api/users').pipe(
      map(this.extractData)
    );
  }
  
  private extractData(res: Response) {
    let body = res;
    return body || {};
  }

}
