import { TestBed, inject } from '@angular/core/testing';

import { BeerService } from './beer.service';
import { CustomHttpService } from '../../core/http/custom-http.service';
import { UrlProviderService } from '../../core/helper/url-provider.service';
import { HttpModule } from '@angular/http';

describe('BeerService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BeerService, CustomHttpService, UrlProviderService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([BeerService], (service: BeerService) => {
    expect(service).toBeTruthy();
  }));
});
