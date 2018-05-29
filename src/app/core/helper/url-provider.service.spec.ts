import { TestBed, inject } from '@angular/core/testing';

import { UrlProviderService } from './url-provider.service';

describe('UrlProviderService', () => {
  let service: UrlProviderService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [UrlProviderService]
    });

    service = TestBed.get(UrlProviderService);
  });

  it('should be created', inject([UrlProviderService], (service: UrlProviderService) => {
    expect(service).toBeTruthy();
  }));

  describe('buildUrl()', () => {
    it('to be defined', () => {
      expect(service.buildUrl).toBeDefined();
    });

    it('should return search resource', () => {
      let res = service.buildUrl('search?q=');

      expect(res).toContain('http://api.brewerydb.com/v2/');
      expect(res).toContain('key');
      expect(res).toContain('search');
    });
  });
  describe('getBaseUrl()', () => {
    it('to be defined', () => {
      expect(service.getBaseUrl).toBeDefined();
    });

    it('should return BASE_URL', () => {
      let res = service.getBaseUrl();
      expect(res).toContain('http://api.brewerydb.com/v2/');
    });
  });
  describe('getCategoriesUrl()', () => {
    it('to be defined', () => {
      expect(service.getCategoriesUrl).toBeDefined();
    });

    it('should return CATEGORIES_URL', () => {
      let res = service.getCategoriesUrl();
      expect(res).toContain('categories?key=&');
    });
  });
  describe('getBeersUrl()', () => {
    it('to be defined', () => {
      expect(service.getBeersUrl).toBeDefined();
    });

    it('should return BEERS_URL', () => {
      let res = service.getBeersUrl();
      expect(res).toContain('beers?glasswareId=1&withBreweries=Y');
    });
  });
  describe('getSearchUrl()', () => {
    it('to be defined', () => {
      expect(service.getSearchUrl).toBeDefined();
    });

    it('should return SEARCH_URL', () => {
      let res = service.getSearchUrl();
      expect(res).toContain('search?q=');
    });
  });
});
