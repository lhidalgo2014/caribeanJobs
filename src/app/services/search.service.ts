import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {map} from 'rxjs/operators';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private http: HttpClient, private router:Router) { }

  searchData(){
      let headers = new HttpHeaders();
      headers.append('Content-Type','application/json');
      return this.http.get('http://localhost:5000/search',{headers:headers})
        .pipe(map((res) => res)); 
  }

  getDetails(){

  }

}
