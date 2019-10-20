import { Graduacao } from './../../models/graduacao';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-card-carousel-graduation',
  templateUrl: './card-carousel-graduation.component.html',
  styleUrls: ['./card-carousel-graduation.component.css']
})
export class CardCarouselGraduationComponent implements OnInit {
  @Input() objeto: Graduacao;
  constructor() { }

  ngOnInit() {
  }

}
