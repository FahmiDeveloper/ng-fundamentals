import { Component, EventEmitter, Input, Output } from '@angular/core';
import { IEvent } from './shared/index';

@Component({
  selector: 'event-thumbnail',
  template: `
    <div [routerLink]="['/events', event.id]" class="well hoverwell thumbnail">
        <h2>{{ event?.name }}</h2>
        <div>Date: {{ event?.date }}</div>
        <div [ngStyle]=" getStyle() "
        [ngSwitch]="event?.time">
          Time: {{ event?.time }}
          <span *ngSwitchCase="'8:00 am'">(Early start)</span>
          <span *ngSwitchCase="'10:00 am'">(Late start)</span>
          <span *ngSwitchDefault>(Normal start)</span>
        </div>
        <div>Price: \${{ event?.price }}</div>
        <div *ngIf="event?.location">
            <span>Location: {{ event?.location?.address }}</span>
            <span class="pad-left">{{ event?.location?.city }}, {{ event?.location?.country }}</span>
        </div>
        <div *ngIf="event?.onlineUrl">
            <span>Online Url: {{ event?.onlineUrl }}</span>
        </div>
    </div>
  `,
  styles: [`
    .green { color:#FFFF00 !important}
    .bold { font-weight: bold}
    .thumbnail { min-height: 210px }
    .pad-left { padding-left: 10px }
    .well div { color: #bbb }
  `     
  ]
})
export class EventThumbnailComponent {
    @Input() event: IEvent;

    getClass() {
      // const isEarlyStart = this.event && this.event.time === '8:00 am';
      // return { green: isEarlyStart, bold: isEarlyStart};

      // if (this.event && this.event.time === '8:00 am')
      // return 'green bold'
      // return ''

      if (this.event && this.event.time === '8:00 am')
      return ['green', 'bold']
      return []
    }

    getStyle() {

      if (this.event && this.event.time === '8:00 am')
      return { color: '#FFFF00', 'font-weight': 'bold'}
      return {}
    }
    
}
