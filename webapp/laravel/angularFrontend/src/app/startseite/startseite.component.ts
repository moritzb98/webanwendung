import { EventService } from './../Services/event.service';
import { UserService } from './../Services/user.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-startseite',
  templateUrl: './startseite.component.html',
  styleUrls: ['./startseite.component.css']
})
export class StartseiteComponent implements OnInit {
  public users: any = [];
  public events: any = [];

  constructor(private userService: UserService, private eventService: EventService) { }

  ngOnInit() {
    this.getUsers();
    this.getEvents();
  }

  getUsers() {
    this.users = this.userService.getUsers().subscribe(
      data => {
        this.users = data.users;
      },
      err => {
        console.log(err);
      }
    );
  }

  getUser(id) {
    localStorage.setItem('userID', id);
  }

  getEvents() {
    const eventsData = this.eventService.getEvents().subscribe(
      data => {
        this.events = data;
      },
      err => {
        console.log(err);
      }
    );
  }
}
