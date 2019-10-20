import { tap } from 'rxjs/operators';
import { Graduacao } from './../models/graduacao';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class GraduationService {
  private API = 'https://bonfimapi.herokuapp.com/Graduacao';

  constructor(private http: HttpClient) { }

  get(): Observable<Graduacao[]> {
    return this.http.get<Graduacao[]>(this.API )
    .pipe(
      tap(console.log)
    );
  }
  post(graduation: Graduacao) {
    return this.http.post<Graduacao>(this.API, graduation );
  }
}
