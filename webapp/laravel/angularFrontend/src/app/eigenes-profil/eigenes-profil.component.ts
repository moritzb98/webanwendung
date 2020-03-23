import { AuthTokenService } from './../Services/auth-token.service';
import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eigenes-profil',
  templateUrl: './eigenes-profil.component.html',
  styleUrls: ['./eigenes-profil.component.css']
})
export class EigenesProfilComponent implements OnInit {
  vorname = null;
  nachname = null;
  alter = null;
  wohnort = null;
  profilePicture = '';
  id = localStorage.getItem('id');
  standard = '../../assets/img/Profilbild/no_profile_image.jpg';

  constructor(private userService: UserService, private token: AuthTokenService) { }

  ngOnInit() {
    this.getVorname();
    this.getData();
    this.getProfilePicture();
  }

  getData() {
    this.userService.getUserData(this.id).subscribe(
      data => {
        this.nachname = data.surname.surname;
        this.alter = data.alter.alter;
        this.wohnort = data.wohnort.wohnort;
      }
    );
  }

  getVorname() {
    this.vorname = this.token.getVorname();
  }

  getProfilePicture() {
    this.userService.getUploadedImage(this.id).subscribe(
      data => {
        this.profilePicture = 'http://localhost/img/' + data.image;
      }
    );
  }
}
