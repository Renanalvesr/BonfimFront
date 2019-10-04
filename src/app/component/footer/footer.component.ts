import { Aulas } from './../../models/aula';
import { Component, OnInit } from '@angular/core';
import {  faFacebookF, faWhatsapp, faInstagram } from '@fortawesome/free-brands-svg-icons';
@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  constructor() { }
  visivel = false;
  aula = [
    new Aulas ('Terças e Quintas', 'Manhã', 'Das 8:00am as 9:30am'),
    new Aulas ('Terças e Quintas', 'Noite', '1° Horário Das 18:00pm as 19:30pm'),
    new Aulas ('Terças e Quintas', 'Noite', '2° Horário Das 19:30pm as 21:00pm'),
    new Aulas ('Sabado', 'Tarde', 'Das 15:00pm as 17:00pm'),
    new Aulas ('Domingo', 'Manhã', 'Das 9:00am as 11:30am'),

  ];
  faceBook = faFacebookF ;
  whatsapp = faWhatsapp;
  instagram = faInstagram;

  ngOnInit() {
  }
  expand() {
    this.visivel = !this.visivel;
  }

}
