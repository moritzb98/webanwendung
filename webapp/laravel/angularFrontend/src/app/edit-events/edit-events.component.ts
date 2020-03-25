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
  }

  onSubmit() {
    this.form.userID = localStorage.getItem('id');
    this.eventService.createEvent(this.form).subscribe(
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

}
