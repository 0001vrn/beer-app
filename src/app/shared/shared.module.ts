import { NgModule } from '@angular/core';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { BeerService } from './services/beer.service';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [BeerService],
  declarations: [SearchBoxComponent, FooterComponent],
  exports: [SearchBoxComponent, FooterComponent]
})
export class SharedModule { }
