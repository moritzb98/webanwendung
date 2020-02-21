import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Services/auth.service';
import { AuthTokenService } from '../Services/auth-token.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  public form = {
    email: null,
    name: null,
    password: null,
    password_confirmation: null
  };
  public error = [];

  constructor(private auth: AuthService, private token: AuthTokenService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.register(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.router.navigateByUrl('/start');
  }

  handleError(error) {
    this.error = error.error.errors;
  }

}
