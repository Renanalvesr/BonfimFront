import { Eventos } from './../../models/eventos';
import { CardEventService } from './../../services/card-event.service';
import { Component, OnInit } from '@angular/core';

import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {

  formulario: FormGroup;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private cardEventService: CardEventService,
    private formBuilder: FormBuilder
  ) {
    this.formulario = new FormGroup({
      dt_ocorrencia: new FormControl(null),
      hr_ocorrencia: new FormControl(null),
      responsavel: new FormControl(null),
      nome_evento: new FormControl(null),
      foto: new FormControl(null),
      endereco: new FormControl(null),
      bairro: new FormControl(null),
      cidade: new FormControl(null),
      estado: new FormControl(null),
      observacao: new FormControl(null)
    });
  }

  ngOnInit() {
  }
  onSubmit() {
    // tslint:disable-next-line: variable-name
    const dt_ocorrencia = this.formulario.controls.dt_ocorrencia.value.split('-');
    const eventos = new Eventos(
      null,
      `${dt_ocorrencia[2]}/${dt_ocorrencia[1]}/${dt_ocorrencia[0]}`,
      this.formulario.controls.hr_ocorrencia.value,
      this.formulario.controls.responsavel.value,
      this.formulario.controls.nome_evento.value,
      btoa(this.formulario.controls.foto.value),
      this.formulario.controls.endereco.value,
      this.formulario.controls.bairro.value,
      this.formulario.controls.cidade.value,
      this.formulario.controls.estado.value,
      this.formulario.controls.observacao.value
    );
    console.log(eventos);

    this.cardEventService.post(eventos)
      .subscribe(
        sucesso => {this.router.navigate(['admin/event/addPhoto/' + sucesso.id]), alert('Evento criado com sucesso'); },
        erro => alert('Erro na criação do evento')

      );
  }
}
