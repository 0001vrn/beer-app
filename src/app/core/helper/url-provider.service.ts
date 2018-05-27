import { Injectable } from '@angular/core';

const BASE_URL = 'https://rocky-bayou-96357.herokuapp.com/http://api.brewerydb.com/v2/';
const API_KEY = '&key=d905bda1503354da3820dc22ba49ad69';

@Injectable()
export class UrlProviderService {

  constructor() { }

  buildUrl(resource: string) {
    return BASE_URL + resource + API_KEY;
  }

  getBaseUrl(){
    return BASE_URL;
  }
}
