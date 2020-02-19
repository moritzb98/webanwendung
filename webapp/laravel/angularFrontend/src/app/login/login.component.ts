import { Component, OnInit } from '@angular/core';
import { join } from 'path';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public form = {
    email: null,
    password: null,
  };

  public error = null;

  constructor(private http: HttpClient) { }

  ngOnInit() {
  }

  onSubmit() {
    return this.http.post('http://localhost/api/login', this.form).subscribe(
      data => console.log(data),
      error => this.handleError(error)
    );
  }

  handleError(error) {
    this.error = error.error.error;
  }
}
