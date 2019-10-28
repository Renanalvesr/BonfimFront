import { Eventos } from './../../models/eventos';

import { CardEventService } from './../../services/card-event.service';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-event',
  templateUrl: './card-event.component.html',
  styleUrls: ['./card-event.component.css']
})
export class CardEventComponent implements OnInit {
 @Input() path = '';
  event: Eventos[];

  constructor( private cardEventService: CardEventService ) { }

  ngOnInit() {
    this.listar();
  }
  listar() {
    this.cardEventService.get().subscribe(
      event => this.event = event
    );
  }

}
