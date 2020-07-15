import { Component, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SearchService } from "src/app/services/search.service";
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  ofertas: any[] = [];
  textoBuscar = '';
  columna = 'nombre';
  especifico = '';
  age;
  showAge="";
  

  get nombre(){
    return this.searchForm.get('nombre');
  }

  searchForm = this.formBuilder.group({
    nombre:['']
  });

  constructor(
    private formBuilder: FormBuilder, 
    private searchService:SearchService, 
    public alertController: AlertController,
    private router: Router
    ) { }


  ngOnInit() {
    this.searchService.searchData().subscribe(ofertas =>{
      console.log(ofertas);
      this.ofertas = ofertas; 
      this.searchForm.reset();
    });
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

  goToDetails(id){
    this.router.navigateByUrl('/search-details/'+id,id);
  }
    

  submit(event){
    this.textoBuscar = event.detail.value;
  }

  submitColumn(event){
    this.columna = event.detail.value; 
  }

}
