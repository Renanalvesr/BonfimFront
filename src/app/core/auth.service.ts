import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const URL_API = 'https://bonfimapi.herokuapp.com/Login';
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
authenticate(userName: string, password: string) {

  return this.http.post(URL_API, {userName, password});
}
}
