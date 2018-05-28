import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DropdownModule } from 'primeng/dropdown';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';


@NgModule({
  imports: [
    CommonModule,
    DataViewModule,
    DataViewModule,
    PanelModule,
    DropdownModule,
    FormsModule
  ],
  declarations: [HomeComponent],
  exports: [HomeComponent]
})
export class HomeModule { }
