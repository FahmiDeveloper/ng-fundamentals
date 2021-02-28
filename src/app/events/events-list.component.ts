import { Component, OnInit } from '@angular/core';
import { ToastrService } from '../common/toastr.service';
import { EventService } from './shared/event.service';

@Component({
  selector: 'events-list',
  template: `
    <div>
      <h1>Upcoming Angular Events</h1>
      <hr/>
      <div class="row">
        <div class="col-md-5" *ngFor = "let event of events">
          <event-thumbnail (click)="handleTumbnailClick(event.name)" [event]="event"></event-thumbnail>
        </div>
      </div>
    </div>
  `
})

export class EventsListComponent implements OnInit {

  events:any[];

  constructor(private eventService: EventService, private toastrService: ToastrService) {}

  ngOnInit() {
    this.events = this.eventService.getEvents();
  }

  handleTumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }
}
