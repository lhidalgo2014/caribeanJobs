import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from '../services/search.service';

@Component({
  selector: 'app-search-details',
  templateUrl: './search-details.component.html',
  styleUrls: ['./search-details.component.scss'],
})
export class SearchDetailsComponent implements OnInit {

  information = null;

  constructor(private activatedRoute: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit() {
    let id = this.activatedRoute.snapshot.paramMap.get('_id');

    this.searchService.getDetails(id).subscribe(result => {
      this.information = result;
    })
  }

}
