import { Categoria } from './../../models/categoria';
import { GraduationService } from './../../services/graduation.service';
import { Graduacao } from './../../models/graduacao';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-carousel-graduation',
  templateUrl: './carousel-graduation.component.html',
  styleUrls: ['./carousel-graduation.component.css']
})
export class CarouselGraduationComponent implements OnInit {

  graduation: Graduacao[];
  adultos: Graduacao[];
  infantil: Graduacao[];
  formacao: Graduacao[];
  @Input() obj = '';

  constructor(private graduationService: GraduationService) { }

  ngOnInit() {
    if (this.obj !== '') {
      this.listar();
      console.log(this.obj);
    }

  }
  listar() {

    this.graduationService.get().subscribe(
      graduation => {
        this.graduation = graduation;

        this.infantil = this.graduation.filter(graduacao => {
          if (graduacao.categoria === 'INFANTIL') {
            return graduacao;
          }
          return;
        });

        this.adultos = this.graduation.filter(graduacao => {
          if (graduacao.categoria === 'ADULTO') {
            return graduacao;
          }
          return;
        });

        this.formacao = this.graduation.filter(graduacao => {
          if (graduacao.categoria === 'FORMAÇÃO') {
            return graduacao;
          }
          return;
        });

      }
    );
  }
}
