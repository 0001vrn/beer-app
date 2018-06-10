import { NgModule } from '@angular/core';
import { CustomHttpService } from './http/custom-http.service';
import { UrlProviderService } from './helper/url-provider.service';

@NgModule({
  imports: [

  ],
  declarations: [],
  providers: [CustomHttpService, UrlProviderService],
  exports: []
})
export class CoreModule { }
