import { Event } from './../../models/event';

import { CardEventService } from './../../services/card-event.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.css']
})
export class CardEventComponent implements OnInit {

  event: Event;

  constructor( private cardEventService: CardEventService ) { }

  ngOnInit() {
    this.cardEventService.get().subscribe(
      event => this.event = event
    );
  }

}
