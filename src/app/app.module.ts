import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryAddComponent } from './categories/category-add/category-add.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { CategoryDeleteComponent } from './categories/category-delete/category-delete.component';
import { ItemsComponent } from './items/items.component';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    NavheaderComponent,
    CategoryDeleteComponent,
    ItemsComponent
  ],
  imports: [BrowserModule, FormsModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
