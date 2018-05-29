import { Component, OnInit } from '@angular/core';
import { Beer, BeerService, Welcome } from '../shared';
import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { SelectItem } from 'primeng/components/common/selectitem';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  errorMsg: any;
  searchEnabled: boolean;
  selectedBeer: Beer;
  displayDialog: boolean;
  beers: Beer[];

  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;

  constructor(private _beerService: BeerService, private _loaderService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.searchEnabled = this._beerService.searchEnabled;

    if(!this.searchEnabled)
    this.getBeers();
    this.listenForBeerStream();

    this.sortOptions = [
      { label: 'Newest First', value: '!year' },
      { label: 'Oldest First', value: 'year' },
      { label: 'Name', value: 'name' },
      { label: 'High ABV', value: '!abv' },
      { label: 'Low ABV', value: 'abv' }
    ];
  }

  listenForBeerStream(){
    this._beerService.beerAnnounced$.subscribe(
      beers => {
        let beerStream = new Array();

        for (let key in beers) {
          if (beers.hasOwnProperty(key)) {
            beerStream.push(beers[key]);
          }
        }
        
        this.beers = beerStream.slice()
      
      }
    )
  }

  getBeers() {
    this._loaderService.show()
    var obsBeers = this._beerService.getBeers();
    var hot = obsBeers.publish();
    obsBeers.subscribe((res) =>{
      this.beers = res.json().data;
      this._loaderService.hide();
    
      error => { this.errorMsg = error }
    }
    )
    hot.connect();
  }

  onSortChange(event) {
    let value = event.value;

    if (value.indexOf('!') === 0) {
      this.sortOrder = -1;
      this.sortField = value.substring(1, value.length);
    }
    else {
      this.sortOrder = 1;
      this.sortField = value;
    }
  }

  selectBeer(event: any, beer: Beer) {
    this.selectedBeer = beer;
    this.displayDialog = true;
    event.preventDefault();
  }

  onDialogHide() {
    this.selectedBeer = null;
  }
}
