import { AuthTokenService } from './../Services/auth-token.service';
import { AuthService } from './../Services/auth.service';
import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eigenes-profil',
  templateUrl: './eigenes-profil.component.html',
  styleUrls: ['./eigenes-profil.component.css']
})
export class EigenesProfilComponent implements OnInit {
  vorname = null;

  constructor(private userService: UserService, private token: AuthTokenService) { }

  ngOnInit() {
    this.getVorname();
  }

  getVorname(){
    this.vorname = this.token.getVorname();
  }
}
