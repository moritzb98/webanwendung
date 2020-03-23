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
    const eventsData = this.eventService.getEvents().subscribe(
      data => {
        this.cards = data;
      },
      err => {
        console.log(err);
      }
    );
  }

  delete(eventId, index) {
    const deleteE = this.eventService.deleteEvent(eventId).subscribe(
      data => {
      },
      err => {
        console.log(err);
      }
    );
    this.cards.splice(index, 1);
  }

}
