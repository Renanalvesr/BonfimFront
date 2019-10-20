import { FormGroup, FormControl } from '@angular/forms';
import { Eventos } from './../../models/eventos';
import { CardEventService } from './../../services/card-event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.css']
})
export class EventDescriptionComponent implements OnInit {

  id: number;
  private sub: any;
  event: Eventos[];

  formulario: FormGroup;
  constructor(private route: ActivatedRoute,
              private cardEventService: CardEventService) {
      this.formulario = new FormGroup({

      id: new FormControl(null),
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
    this.getId();
    this.listar();
  }

  getId() {
    this.sub = this.route.params.subscribe(params => {
      this.id = +params.id; // (+) converts string 'id' to a number
    });
  }
  listar() {

    this.cardEventService.get().subscribe(
      event => this.event = event
    );
  }
  onSubmit() {
    const eventos = new Eventos(
      this.id,
      this.formulario.controls.dt_ocorrencia.value,
      this.formulario.controls.hr_ocorrencia.value,
      this.formulario.controls.responsavel.value,
      this.formulario.controls.nome_evento.value,
      null,
      this.formulario.controls.endereco.value,
      this.formulario.controls.bairro.value,
      this.formulario.controls.cidade.value,
      this.formulario.controls.estado.value,
      this.formulario.controls.observacao.value
    );

    console.log(eventos);

    this.cardEventService.post(eventos)
      .subscribe(
        // tslint:disable-next-line: no-shadowed-variable
        data => console.log('succes! ', data),
        err => console.error('Error', err)

      );
  }
  delete(id: number) {
    this.cardEventService.delete(this.id).subscribe(sucesso=>
      {

        alert(sucesso);
        debugger;

      },error=>
      {
        debugger;
        alert(error);
      });
    console.log(this.id, 'deletado') ;

  }
}
