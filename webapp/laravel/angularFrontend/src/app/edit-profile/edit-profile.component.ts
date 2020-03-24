import { EventService } from './../Services/event.service';
import { AuthTokenService } from './../Services/auth-token.service';
import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-profile',
  templateUrl: './edit-profile.component.html',
  styleUrls: ['./edit-profile.component.css']
})
export class EditProfileComponent implements OnInit {
  vorname = null;
  nachname = null;
  alter = null;
  wohnort = null;
  profilePicture = '';
  id = localStorage.getItem('id');
  standard = '../../assets/img/Profilbild/no_profile_image.jpg';
  public cards: any = [];
  public form = {
    name: null,
    surname: null,
    alter: null,
    wohnort: null,
    userID: null,
  };

  // tslint:disable-next-line:max-line-length
  constructor(private userService: UserService, private token: AuthTokenService, private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.getVorname();
    this.getData();
    this.getProfilePicture();
    this.getEvents();
    this.form.userID = localStorage.getItem('id');
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

  getVorname() {
    this.vorname = this.token.getVorname();
    this.form.name = this.vorname;
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

  save() {
    if (this.form.name == null) {
      this.form.name = this.vorname;
    }
    if (this.form.surname == null) {
      this.form.surname = this.nachname;
    }
    if (this.form.alter == null) {
      this.form.alter = this.alter;
    }
    if (this.form.wohnort == null) {
      this.form.wohnort = this.wohnort;
    }

    const newData = this.userService.updateData(this.form).subscribe(
      data => {
        this.router.navigateByUrl('meinProfil');
      },
      err => {
        console.log(err);
      }
    );
  }
}
