import { Component, OnInit } from '@angular/core';
import { Beer, BeerService, Welcome } from '../shared';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  
  beers: Beer[];
  constructor(private _beerService: BeerService, private _loaderService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.getBeers();
  }


  getBeers() {
    this._loaderService.show();

    this._beerService.getBeers().then((data: Welcome) => {
      console.log(data);
      this.beers = data.data;
      this._loaderService.hide();
    });
  }

}
