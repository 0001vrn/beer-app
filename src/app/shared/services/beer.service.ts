import { Injectable } from '@angular/core';
import { CustomHttpService, UrlProviderService } from '../../core';

@Injectable()
export class BeerService {

  constructor(private http: CustomHttpService, private urlProviderService: UrlProviderService) { }

  getBeers(){
    return this.http.get(this.urlProviderService.buildUrl('beers?glasswareId=1&withBreweries=Y')).toPromise()
      .then((response) => {
        return response.json();
      });
  }

  search(q: string) {
    return this.http.get(this.urlProviderService.buildUrl('search?q=' + q)).toPromise().
      then((response) => {
        return response.json();
      });
  }
}
