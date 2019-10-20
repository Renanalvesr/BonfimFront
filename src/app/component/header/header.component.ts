import { Menu } from './../../models/menu';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private route: ActivatedRoute) { }

  ACTUAL_URL = this.route.snapshot.params.id;

  menu = [
    new Menu ('Inicio', 'home'),
    new Menu ('Sobre Nós', 'about'),
    new Menu ('Eventos', 'event'),
    new Menu ('Graduação', 'graduation')
];

  ngOnInit() {
  }

}
