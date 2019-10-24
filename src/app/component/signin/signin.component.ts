import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
  loginForm: FormGroup;
  constructor(private formbuilder: FormBuilder) { }

  ngOnInit() {
    this.formbuilder.group(
      {userName: ['renan', Validators.required],
      password: ['', Validators.required]     }
    );
  }

}
