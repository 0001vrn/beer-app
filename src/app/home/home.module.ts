import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { DropdownModule } from 'primeng/dropdown';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { FormsModule } from '@angular/forms';
import { DialogModule } from 'primeng/dialog';


@NgModule({
  imports: [
    CommonModule,
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,
    FormsModule
  ],
  declarations: [HomeComponent],
  exports: [
    HomeComponent, 
    DataViewModule,
    PanelModule,
    DialogModule,
    DropdownModule,]
})
export class HomeModule { }
