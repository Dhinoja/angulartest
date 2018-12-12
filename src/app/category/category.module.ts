import { NgModule } from '@angular/core';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { CategoryService } from './category.service';
import { ItemService } from '../item/item.service';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryEditComponent
  ],
  imports: [
    HttpModule,
    CategoryRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule
  ],
  providers: [CategoryService, ItemService]
})
export class CategoryModule {}
