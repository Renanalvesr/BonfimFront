import { Categoria } from './../../models/categoria';
import { GraduationService } from './../../services/graduation.service';
import { Graduacao } from './../../models/graduacao';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-graduation-button',
  templateUrl: './graduation-button.component.html',
  styleUrls: ['./graduation-button.component.css']
})
export class GraduationButtonComponent implements OnInit {

  constructor(private graduationService: GraduationService) {

    // ];


  }
  Graduacao: Graduacao[] = [];
  GraduacaoCarousel: Graduacao[] = [];
  ngOnInit() {
    this.getCategoria();
    this.listar();
  }
  listar() {
    this.graduationService.get().subscribe(
      graduation => {
        this.Graduacao = graduation;

      }
    );
  }
  getCategoria() {

          return [
            {valor: 'INFANTIL', desc: 'Corda Infantil'},
            {valor: 'ADULTO', desc: 'Corda de Adultos'},
            {valor: 'FORMAÇÃO', desc: 'Corda de Formação e mestre'}
          ];

  }

  onChange(value) {

    if (value === 'INFANTIL') {
        this.GraduacaoCarousel = this.Graduacao.filter(graduacao => {
          if (graduacao.categoria === 'INFANTIL') {
               return graduacao;
              }
            });
      } else if (value === 'ADULTO') {
        this.GraduacaoCarousel = this.Graduacao.filter(graduacao => {
            if (graduacao.categoria === 'ADULTO') {
              return graduacao;
            }
            return;
          });
      } else if (value === 'FORMAÇÃO') {
        this.GraduacaoCarousel = this.Graduacao.filter(graduacao => {
            if (graduacao.categoria === 'FORMAÇÃO') {
              return graduacao;
            }
            return;
          });
      }

    console.log(value);


  }
}
