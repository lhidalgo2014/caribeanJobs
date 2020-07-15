import { Component, OnInit } from '@angular/core';
import { SearchService } from "src/app/services/search.service";
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.page.html',
  styleUrls: ['./search-details.page.scss'],
})
export class SearchDetailsPage implements OnInit {

  id: any;
  oferta: any[] = [];

  constructor(private searchService:SearchService, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params =>{
      this.id = params['id'];
    });
    
    this.searchService.getDetails(this.id).subscribe(oferta =>{
      console.log(oferta);
      this.oferta = [oferta]; 
    });

    console.log(this.oferta);
  }

  ageCalculator(date){
    if(date){
      const convertAge = new Date(date);
      const timeDiff = Math.abs(Date.now() - convertAge.getTime());
      const edadCalculada = Math.floor((timeDiff / (1000 * 3600 * 24))/365);
      const resultado = edadCalculada.toString();
      return resultado;
    }
  }

}
