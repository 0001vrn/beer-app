import { Injectable } from '@angular/core';
import { Subject } from 'rxjs/Subject';
import { Observable } from 'rxjs/Observable';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import { CustomHttpService } from '../../core/http/custom-http.service';
import { UrlProviderService } from '../../core/helper/url-provider.service';
import { Beer } from '../model/beer-pagination-list.model';

@Injectable()
export class BeerService {

  searchEnabled: boolean;
  beerAnnouncedSource = new Subject<Beer>();
  beerAnnounced$ = this.beerAnnouncedSource.asObservable();
  searchResults: any;
  beer: Beer;
  result: any;

  constructor(private http: CustomHttpService, private urlProviderService: UrlProviderService) { }

  getBeers() {

    if (!this.result) {

      return this.result = this.http.get(this.urlProviderService.buildUrl(this.urlProviderService.getBeersUrl()))
        .publishReplay(1)
        .refCount();
    }


    if (!(this.result instanceof Observable)) {
      this.beerAnnouncedSource.next(this.result);

      return Observable.of(this.result);
    } else {
      return this.result;
    }

  }

  searchBeer(term, category) {
    if (term && term.length > 0) {
      return this.http.get(this.urlProviderService.buildUrl(this.urlProviderService.getSearchUrl() + term)).toPromise()
        .then(res => {
          this.searchResults = res.json().data;
          if (category !== 'All' && category !== undefined) {
            const filteredByCat = this.searchResults.filter(beer => (beer.style !== undefined && beer.style.category.name === category));
            this.beerAnnouncedSource.next(filteredByCat);
          } else {
            this.beerAnnouncedSource.next(this.searchResults);
            this.result = this.searchResults;
          }
          this.searchEnabled = true;
          Promise.resolve(this.beer);
        });
    }
    return this.beer;
  }

  getCategories() {
    return this.http.get(this.urlProviderService.buildUrl(this.urlProviderService.getCategoriesUrl())).toPromise()
      .then((res) => {
        return res.json();
      });
  }
}
