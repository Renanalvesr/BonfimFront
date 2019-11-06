import { Eventos } from './../models/eventos';
import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class CardEventService {
  private API = 'https://bonfimapi.herokuapp.com/Evento';

  constructor(private http: HttpClient)  {
   }

  get(): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(this.API )
    .pipe(
      tap(console.log)
    );
  }
  post(event: Eventos) {
    return this.http.post<Eventos>(this.API, event );
  }
  foto(foto: File, id: number): Observable<any> {
    const formData = new FormData();
    formData.append('foto', foto);

    console.log(this.API + '/' + id + '/foto'+' *************OUTRO LOG');

    return this.http.post<any>(this.API + '/' + id + '/foto', formData);
  }
  delete(id: number): Observable<any> {
    console.log(this.API + '/' + id);
    return this.http.delete<string>(this.API + '/' + id);
  }
}
