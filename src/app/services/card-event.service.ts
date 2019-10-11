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

  constructor(private http: HttpClient) { }

  get(): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(this.API )
    .pipe(
      tap(console.log)
    );

  }
}
