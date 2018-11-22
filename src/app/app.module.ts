import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemAddComponent } from './items/item-add/item-add.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';
import { ItemDeleteComponent } from './items/item-delete/item-delete.component';
import { RepositoryService } from './repository.service';
import { MaterialModule } from './material.module';
import { ToCsvPipe } from './pipes/ToCsv.pipe';
import { HttpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    NavheaderComponent,
    CategoryDeleteComponent,
    ItemsComponent,
    ItemListComponent,
    ItemAddComponent,
    ItemEditComponent,
    ItemDeleteComponent,
    ToCsvPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    MaterialModule,
    HttpModule
  ],
  providers: [RepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule {}
