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
  preview = false;
  foto: any;

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

  uploadFoto() {
    this.id = this.id;
    this.cardEventService.foto(this.foto, this.id) .subscribe(
      // tslint:disable-next-line: no-shadowed-variable
      data => alert(data),
      err => alert(err)

    );
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
      this.foto,
      this.formulario.controls.endereco.value,
      this.formulario.controls.bairro.value,
      this.formulario.controls.cidade.value,
      this.formulario.controls.estado.value,
      this.formulario.controls.observacao.value
    );
    this.uploadFoto();
    this.cardEventService.post(eventos)
      .subscribe(
        // tslint:disable-next-line: no-shadowed-variable
        data => alert(data),
        err => alert(err)

      );
    this.router.navigate(['/admin']);
  }
  delete(id: number) {
    this.cardEventService.delete(this.id).subscribe(sucesso => {
      this.router.navigate(['/admin']);

      alert(sucesso);
      }, error => {
        alert(error);
        console.log(error);
      });
    console.log(this.id, 'deletado') ;

  }

  onFileSelect(event) {
    if (event.target.files && event.target.files[0]) {
      const reader = new FileReader();
      // tslint:disable-next-line: no-shadowed-variable
      reader.onload = (event: any) => {
        this.url = event.target.result;
      };
      reader.readAsDataURL(event.target.files[0]);
    }
    this.preview = true;
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.foto = this.formulario.get('foto').setValue(file);
    }
  }
}
