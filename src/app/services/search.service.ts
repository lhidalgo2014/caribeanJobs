import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private router:Router ) { }

  searchData(){
      let headers = new HttpHeaders();
      headers.append('Content-Type','application/json');
      return this.http.get<any[]>('http://localhost:5000/ofertas/search',{headers:headers})
        .pipe(map((res) => res)); 
  }

  getDetails(id){
      let headers = new HttpHeaders();
      headers.append('Content-Type','application/json');
      return this.http.get<any[]>('http://localhost:5000/ofertas/search/'+id,{headers:headers})
        .pipe(map((res) => res)); 
  }

}
