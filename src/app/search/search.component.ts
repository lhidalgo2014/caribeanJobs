import { Component, OnInit } from '@angular/core';
import { AlertController, Platform } from '@ionic/angular';
import { ReactiveFormsModule, FormGroup, FormBuilder, Validators } from "@angular/forms";
import { SearchService } from "src/app/services/search.service";
import { HttpClient } from "@angular/common/http"
import { Observable } from 'rxjs';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent implements OnInit {

  ofertas: any[] = [];
  textoBuscar = '';

  get nombre(){
    return this.searchForm.get('nombre');
  }

  searchForm = this.formBuilder.group({
    nombre:['']
  });

  constructor(
    private formBuilder: FormBuilder, 
    private searchService:SearchService, 
    public alertController: AlertController
    ) { }


  ngOnInit() {
    this.searchService.searchData().subscribe(ofertas =>{
      console.log(ofertas);
      this.ofertas = ofertas; 
      //this.presentAlert();
      this.searchForm.reset();
    });
  }

    

  submit(event){
    this.textoBuscar = event.detail.value;
  }

}
