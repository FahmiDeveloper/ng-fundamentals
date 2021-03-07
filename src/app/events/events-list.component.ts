import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from '../common/toastr.service';
import { IEvent } from './shared/index';
import { EventService } from './shared/event.service';

@Component({
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

  events:IEvent[];

  constructor(
    private eventService: EventService, 
    private toastrService: ToastrService,
    private route: ActivatedRoute
    ) {}

  ngOnInit() {
    this.events = this.route.snapshot.data['events'];
  }

  handleTumbnailClick(eventName) {
    this.toastrService.success(eventName);
  }
}
