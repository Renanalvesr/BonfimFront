import { FormGroup } from '@angular/forms';
import { Eventos } from './../models/eventos';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardEventService {
  private API = 'https://bonfimapi.herokuapp.com/Evento';
  uploadForm: FormGroup;

  constructor(private http: HttpClient) { }

  get(): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(this.API);
  }
  post(event: Eventos): Observable<any> {
    return this.http.post<Eventos>(this.API, event);
  }
  uploadPhoto(uploadForm: FormGroup, id: number): Observable<any> {
    const formData = new FormData();
    formData.append('foto', uploadForm.get('profile').value);

    return this.http.post<any>(this.API + '/' + id + '/foto', formData);
  }
  delete(id: number): Observable<any> {
    return this.http.delete<string>(this.API + '/' + id);
  }
}
