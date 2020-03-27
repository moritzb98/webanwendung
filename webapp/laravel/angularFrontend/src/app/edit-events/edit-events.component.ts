import { EventService } from './../Services/event.service';
import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import { MatDatepickerInputEvent } from '@angular/material';

@Component({
  selector: 'app-edit-events',
  templateUrl: './edit-events.component.html',
  styleUrls: ['./edit-events.component.css']
})
export class EditEventsComponent implements OnInit {

  public form = {
    title: null,
    subtitle: null,
    date: null,
    description: null,
    userID: null,
  };

  error: null;

  constructor(private eventService: EventService, private router: Router) { }

  ngOnInit() {
    this.getEvent();
  }

  onSubmit() {
    this.form.userID = localStorage.getItem('id');
    const eventID = localStorage.getItem('dbEventID');
    this.eventService.editEvent(eventID, this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    console.log(data);
    this.router.navigateByUrl('events');
  }

  handleError(error) {
    this.error = error.error.error;
  }

  addEvent(type: string, event: MatDatepickerInputEvent<Date>) {
    const date = new Date(`${event.value}`);
    this.form.date = date.getDate() + '/' + (date.getMonth() + 1 ) + '/' + date.getFullYear();
  }

  getEvent() {
    const eventData = this.eventService.getEvents().subscribe(
      data => {
        this.form.title = data[localStorage.getItem('eventID')].title;
        this.form.subtitle = data[localStorage.getItem('eventID')].subtitle;
        this.form.date = data[localStorage.getItem('eventID')].date;
        this.form.description = data[localStorage.getItem('eventID')].description;
      },
      err => {
        console.log(err);
      }
    );
  }

}
