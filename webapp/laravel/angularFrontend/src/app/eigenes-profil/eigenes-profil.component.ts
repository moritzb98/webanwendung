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
  profilePicture = '';

  constructor(private userService: UserService, private token: AuthTokenService) { }

  ngOnInit() {
    this.getVorname();
    this.getProfilePicture();
  }

  getVorname() {
    this.vorname = this.token.getVorname();
  }

  getProfilePicture() {
    const id = localStorage.getItem('id');
    this.userService.getUploadedImage(id).subscribe(
      data => {
        this.profilePicture = 'http://localhost/img/' + data.image;
        console.log(this.profilePicture);
      }
    );
  }
}
