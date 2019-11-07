import { HttpClient } from '@angular/common/http';
import { CardEventService } from './../../services/card-event.service';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-fotos',
  templateUrl: './fotos.component.html',
  styleUrls: ['./fotos.component.css']
})
export class FotosComponent implements OnInit {
  url: string;
  private sub: any;
  preview = false;
  uploadForm: FormGroup;
  id: number;

  constructor(
    private route: ActivatedRoute,
    private formBuilder: FormBuilder,
    private cardEventService: CardEventService,
    private router: Router
  ) { }

  ngOnInit() {
    this.getId();
    this.uploadForm = this.formBuilder.group({
      profile: ['']
    });
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
      this.uploadForm.get('profile').setValue(file);

    }
  }
  onSubmit() {

    this.cardEventService.uploadPhoto(this.uploadForm, this.id).subscribe(
      (succes) => {alert('Upload da foto foi completado com sucesso'), this.router.navigate(['/admin']); },
      (error) => alert('Erro ao tentar fazer o upload')
    );
  }
  getId() {
    this.sub = this.route.params.subscribe(params => {
      this.id = + params.id;
    });
  }

}
