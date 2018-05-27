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
      expect(res).toContain('http://api.brewerydb.com/v2/')
    });
  });
});
