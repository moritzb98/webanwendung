import { CheckAuthService } from './../Services/check-auth.service';
import { AuthService } from './../Services/auth.service';
import { Component, OnInit } from '@angular/core';
import { AuthTokenService } from '../Services/auth-token.service';
import { Router } from '@angular/router';

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

  constructor(private auth: AuthService,
              private token: AuthTokenService,
              private router: Router,
              private checkAuth: CheckAuthService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.auth.login(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.token.handle(data.access_token);
    this.checkAuth.changeAuthStatus(true);
    this.router.navigateByUrl('/start');
  }

  handleError(error) {
    this.error = error.error.error;
  }
}
