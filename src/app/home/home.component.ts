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

  selectedBeer: Beer;
  displayDialog: boolean;
  beers: Beer[];

  sortOptions: SelectItem[];
  sortKey: string;
  sortField: string;
  sortOrder: number;

  constructor(private _beerService: BeerService, private _loaderService: Ng4LoadingSpinnerService) { }

  ngOnInit() {
    this.getBeers();

    this.sortOptions = [
      { label: 'Newest First', value: '!year' },
      { label: 'Oldest First', value: 'year' },
      { label: 'Name', value: 'name' },
      { label: 'ABV', value: 'abv' }
    ];
  }


  getBeers() {
    this._loaderService.show();

    this._beerService.getBeers().then((data: Welcome) => {
      console.log(data);
      this.beers = data.data;
      this._loaderService.hide();
    });
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
