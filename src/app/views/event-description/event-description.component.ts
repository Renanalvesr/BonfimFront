import { HttpClient } from '@angular/common/http';
import { FormGroup } from '@angular/forms';
import { Eventos } from './../../models/eventos';
import { CardEventService } from './../../services/card-event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.css']
})
export class EventDescriptionComponent implements OnInit {

  id: number;
  private sub: any;
  event: Eventos[];
  url: string;
  preview = false;

  formulario: FormGroup;
  constructor(private route: ActivatedRoute,
              private cardEventService: CardEventService,
              private router: Router) {
  }
  ngOnInit() {
    this.getId();
    this.listar();
  }

  getId() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id;
    });
  }
  listar() {

    this.cardEventService.get().subscribe(
      event => this.event = event
    );
  }
  voltar() {
    this.router.navigate(['\event']);
  }
}
