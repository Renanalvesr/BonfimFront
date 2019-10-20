import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graduation-button',
  templateUrl: './graduation-button.component.html',
  styleUrls: ['./graduation-button.component.css']
})
export class GraduationButtonComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    this.getCategoria();
  }
  getCategoria() {
    return [
      {valor: 'Infantil', desc: 'Corda Infantil'},
      {valor: 'Adultos', desc: 'Corda de Adultos'},
      {valor: 'Formacao', desc: 'Corda de Formação e mestre'}
    ];
  }
  onChange(value) {
    console.log(value);


  }
}
