import { Component } from '@angular/core';
import { FoodsService } from './services/foods.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor (private foodService: FoodsService) {
  }
  ngOnInit() {
  }
}
