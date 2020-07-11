import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class FormService {

  constructor(private http: HttpClient, private router:Router ) { }

  agregarOferta(cons){
    console.log(cons);
    let headers = new HttpHeaders();
    headers.append('Content-Type','application/json');
    return this.http.post('http://localhost:5000/ofertas/register',cons,{headers:headers})
    .pipe(map((res) => res));
  }

}
