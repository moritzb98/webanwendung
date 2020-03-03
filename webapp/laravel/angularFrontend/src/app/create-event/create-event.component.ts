import { EventService } from './../Services/event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.css']
})
export class CreateEventComponent implements OnInit {
  public form = {
    titel: null,
    subtitel: null,
    date: null,
    description: null,
  };

  error: null;
  router: any;

  constructor(private eventService: EventService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.eventService.createEvent(this.form).subscribe(
      data => this.handleResponse(data),
      error => this.handleError(error)
    );
  }

  handleResponse(data) {
    this.router.navigateByUrl('/start');
    console.log(data);
  }

  handleError(error) {
    this.error = error.error.error;
  }

}
