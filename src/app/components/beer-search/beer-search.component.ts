import { Component, OnInit } from '@angular/core';
import { Beer } from 'src/app/models/beer.model';
import { FoodsService } from 'src/app/services/foods.service';

@Component({
  selector: 'app-beer-search',
  templateUrl: './beer-search.component.html',
  styleUrls: ['./beer-search.component.scss']
})
export class BeerSearchComponent implements OnInit {

  public beers: Beer[];
  public beerWrite: string;
  public filteredBeers: Beer[];
  public pages: number = 1;

  constructor(private foodService: FoodsService) { 
    this.beers = [];
    this.filteredBeers = [];
    this.beerWrite = '';
  }
  

  ngOnInit() {
    this.foodService.getBeers()
      .subscribe((res: any) => {
        this.beers = res;
        this.filteredBeers = res;
      });
  }

  filterBeers(newValue: string) {
    return this.filteredBeers = this.beers.filter((element) => element.name?.toLowerCase().startsWith(newValue.toLowerCase()) );
  }

}
