import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
import { Eventos } from './../../models/eventos';
import { CardEventService } from './../../services/card-event.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-edit-event',
  templateUrl: './edit-event.component.html',
  styleUrls: ['./edit-event.component.css']
})
export class EditEventComponent implements OnInit {

  id: number;
  private sub: any;
  event: Eventos[];
  url: string;

  formulario: FormGroup;
  constructor(private route: ActivatedRoute,
              private cardEventService: CardEventService,
              private formBuilder: FormBuilder,
              private router: Router) {
      this.formulario = new FormGroup({

      dt_ocorrencia: new FormControl(),
      hr_ocorrencia: new FormControl(),
      responsavel: new FormControl(),
      nome_evento: new FormControl(),
      foto: new FormControl(''),
      endereco: new FormControl(''),
      bairro: new FormControl(''),
      cidade: new FormControl(''),
      estado: new FormControl(''),
      observacao: new FormControl('')
    });
  }
  ngOnInit() {
    this.getId();
    this.listar();
  }

  getId() {
    this.sub = this.route.params.subscribe(params => {
      this.id = + params.id;
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
    this.cardEventService.post(eventos)
      .subscribe(
        // tslint:disable-next-line: no-shadowed-variable
        sucesso => this.router.navigate(['admin/event/addPhoto/' + sucesso.id]),
        erro => alert('Erro na criação do evento')

      );
  }
  delete() {
    this.cardEventService.delete(this.id)
    .subscribe(
      sucess => {
      alert('Evento deletado com sucesso'),
      this.router.navigate(['/admin']);
    }, error => {
      alert('Ocorreu um erro ao tentar deletar'),
      this.router.navigate(['/admin/event/desc/' + this.id]);
      console.log(error);
      });

  }

}
