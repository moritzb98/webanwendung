import { EventService } from './../Services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.css']
})
export class EventsComponent implements OnInit {

  public cards = [];

  constructor(private eventService: EventService) { }

  ngOnInit() {
    this.getEvents();
  }

  getEvents() {
    const events = this.eventService.getEvents().subscribe(
      data => {
        this.cards = data.events;
      },
      err => {
        console.log(err);
      }
    );
  }

}
