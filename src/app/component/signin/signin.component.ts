import { Router } from '@angular/router';
import { AuthService } from './../../core/auth.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';

@Component({
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {

  loginForm: FormGroup;
  @ViewChild('', {static: false})userNameInput: ElementRef<HTMLInputElement>;

  constructor(private formbuilder: FormBuilder,
              private authService: AuthService,
              private router: Router) { }

  ngOnInit() {
    this.loginForm = this.formbuilder.group(
      {
        userName: ['', Validators.required],
        password: ['', Validators.required]
      }
    );
  }
  login() {
    const userName = this.loginForm.get('userName').value;
    const password = this.loginForm.get('password').value;

    if (userName === 'Bonfim' && password === '123') {
      this.router.navigateByUrl('/admin');
      return alert( 'Conectado');
    } else {
      this.loginForm.reset();
      this.userNameInput.nativeElement.focus() ;
      return alert('Usuário ou senha incorreta');
    }
    // this.authService.authenticate(userName, password).subscribe(
    //   success => alert ('conectado'),
    //   err => {alert(err);
    //           this.loginForm.reset();
    // }
    // );

  }

}
