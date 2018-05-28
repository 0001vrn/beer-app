import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UrlProviderService, CustomHttpService } from '.';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [UrlProviderService, CustomHttpService]
})
export class CoreModule { }
