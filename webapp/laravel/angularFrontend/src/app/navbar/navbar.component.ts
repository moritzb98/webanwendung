import { AuthTokenService } from './../Services/auth-token.service';
import { Component, OnInit } from '@angular/core';
import { CheckAuthService } from '../Services/check-auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  public loggedIn: boolean;

  constructor(private checkAuth: CheckAuthService, private router: Router, private token: AuthTokenService) { }

  ngOnInit() {
    this.checkAuth.authStatus.subscribe(value => this.loggedIn = value);
  }

  logout(event: MouseEvent) {
    event.preventDefault();
    this.token.remove();
    this.checkAuth.changeAuthStatus(false);
    this.router.navigateByUrl('/login');
  }

}
