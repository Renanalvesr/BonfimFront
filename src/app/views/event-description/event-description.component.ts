import { FormGroup, FormControl } from '@angular/forms';
import { Eventos } from './../../models/eventos';
import { CardEventService } from './../../services/card-event.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-event-description',
  templateUrl: './event-description.component.html',
  styleUrls: ['./event-description.component.css']
})
export class EventDescriptionComponent implements OnInit {

  id: number;
  private sub: any;
  event: Eventos[];
  url: string;
  preview = false;

  formulario: FormGroup;
  constructor(private route: ActivatedRoute,
              private cardEventService: CardEventService, private router: Router) {
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
      this.id = +params.id;
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
        data => alert(data),
        err => alert(err)

      );
    this.router.navigate(['/event']);
  }
  delete(id: number) {
    this.cardEventService.delete(this.id).subscribe(sucesso => {
      this.router.navigate(['/event']);

      alert(sucesso);
      }, error => {
        alert(error);
        console.log(error);
      });
    console.log(this.id, 'deletado') ;

  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    this.preview = true;
  }
}
