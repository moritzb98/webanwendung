import { EventService } from './../Services/event.service';
import { AuthTokenService } from './../Services/auth-token.service';
import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {
  vorname = null;
  nachname = null;
  alter = null;
  wohnort = null;
  profilePicture = '';
  id = localStorage.getItem('id');
  standard = '../../assets/img/Profilbild/no_profile_image.jpg';
  public cards: any = [];

  constructor(private userService: UserService, private token: AuthTokenService, private eventService: EventService) {
  }

  ngOnInit() {
    this.getData();
    this.getProfilePicture();
    this.getEvents();
  }

  getData() {
    this.userService.getUserData(this.id).subscribe(
      data => {
        this.vorname = data.name.name;
        this.nachname = data.surname.surname;
        this.alter = data.alter.alter;
        this.wohnort = data.wohnort.wohnort;
      }
    );
  }

  getProfilePicture() {
    this.userService.getUploadedImage(this.id).subscribe(
      data => {
        this.profilePicture = 'http://localhost/img/' + data.image;
      }
    );
  }

  getEvents() {
    const eventsData = this.eventService.getUserEvents(this.id).subscribe(
      data => {
        this.cards = data;
      },
      err => {
        console.log(err);
      }
    );
  }

myAlert() {
  alert('Funktion noch nicht implementiert.');
}


}
