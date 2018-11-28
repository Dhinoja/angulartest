import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavheaderComponent } from './navheader/navheader.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [HomeComponent, NavheaderComponent]
})
export class CoreModule { }
