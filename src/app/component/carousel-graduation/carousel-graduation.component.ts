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

  // graduations: Graduacao[];
  // adultos: Graduacao[];
  // infantil: Graduacao[];
  // formacao: Graduacao[];
  @Input() graduacoes :Graduacao[] = [];
  
  

  constructor(private graduationService: GraduationService) { }

  ngOnInit() {
    
  
   

  }
  // listar() {

  //   this.graduationService.get().subscribe(
  //     graduation => {
  //       this.graduationsBase = graduation;
  //       // this.infantil = this.graduations.filter(graduacao => {
  //       //   if (graduacao.categoria === 'INFANTIL') {
  //       //     return graduacao;
  //       //   }
  //       //   return;
  //       // });

  //       // this.adultos = this.graduations.filter(graduacao => {
  //       //   if (graduacao.categoria === 'ADULTO') {
  //       //     return graduacao;
  //       //   }
  //       //   return;
  //       // });

  //       // this.formacao = this.graduations.filter(graduacao => {
  //       //   if (graduacao.categoria === 'FORMAÇÃO') {
  //       //     return graduacao;
  //       //   }
  //       //   return;
  //       // });

  //     }
  //   );
  // }
  // filterArray()
  // {

  // }
}
