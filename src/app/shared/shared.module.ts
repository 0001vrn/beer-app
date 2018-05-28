import { NgModule } from '@angular/core';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { CustomHttpService, UrlProviderService } from '../core';
import { BeerService } from './services/beer.service';

@NgModule({
  imports: [
  ],
  providers: [CustomHttpService, UrlProviderService, BeerService],
  declarations: [SearchBoxComponent],
  exports: [SearchBoxComponent]
})
export class SharedModule { }
