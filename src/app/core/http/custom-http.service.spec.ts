import { TestBed, inject } from '@angular/core/testing';

import { CustomHttpService } from './custom-http.service';
import { HttpModule } from '@angular/http';

describe('CustomHttpService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CustomHttpService],
      imports: [HttpModule]
    });
  });

  it('should be created', inject([CustomHttpService], (service: CustomHttpService) => {
    expect(service).toBeTruthy();
  }));
});
