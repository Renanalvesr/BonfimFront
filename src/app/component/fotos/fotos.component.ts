import { HttpClient } from '@angular/common/http';
import { CardEventService } from './../../services/card-event.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {

  @Input() Evento = '';
  url: string;
  private sub: any;
  preview = false;
  uploadForm: FormGroup;
  foto: any;
  id = 1;
  SERVER_URL = "https://bonfimapi.herokuapp.com/Evento"

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private cardEventService: CardEventService,
    private httpClient: HttpClient
  ) { }

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
      this.foto = this.uploadForm.get('profile').setValue(file);
      console.log(this.foto);

    }
  }
  uploadFoto() {
    const formData = new FormData();
    formData.append('file', this.uploadForm.get('profile').value);

    this.httpClient.post<any>(this.SERVER_URL + '/' + this.id + '/foto', formData).subscribe(
      (res) => console.log(res),
      (err) => console.log(err)
    );
      

  }
  ngOnInit() {
    // this.getId();

    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
  }
  getId() {
    this.sub = this.route.params.subscribe(params => {
      this.id = + params.id;
    });
  }

}
