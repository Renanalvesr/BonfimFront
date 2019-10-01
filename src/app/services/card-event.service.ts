import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event';


const URL_LISTA = 'http://localhost:4200/assets/event.json';

@Injectable({
  providedIn: 'root'
})
export class CardEventService {

  constructor(private http: HttpClient) { }

  get(): Observable<Event> {
    return this.http.get<Event>(URL_LISTA);

  }
}
