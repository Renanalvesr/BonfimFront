import { GraduationService } from './../../services/graduation.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private graduationService: GraduationService) { }

  ngOnInit() {
    this.ativaHiroku();
  }
  ativaHiroku() {
    this.graduationService.get();
  }

}
