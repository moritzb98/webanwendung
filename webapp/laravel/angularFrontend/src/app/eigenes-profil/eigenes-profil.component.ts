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
  profilePicture = '../../../../public/storage/laravel/';
  standardPicture = 'martin-pechy.jpg';
  

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
        this.standardPicture = data.image;
        this.profilePicture += this.standardPicture;
      }
    );
  }
}
