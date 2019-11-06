import { GraduationService } from './../../services/graduation.service';
import { Graduacao } from './../../models/graduacao';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-graduation',
  templateUrl: './carousel-graduation.component.html',
  styleUrls: ['./carousel-graduation.component.css']
})
export class CarouselGraduationComponent implements OnInit {

  @Input() graduacoes: Graduacao[] = [];


  constructor(private graduationService: GraduationService) { }

  ngOnInit() {
  }
}
