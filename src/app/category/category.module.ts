import { NgModule } from '@angular/core';
import { CategoryComponent } from './category.component';
import { CategoryListComponent } from './category-list/category-list.component';
import { CategoryAddComponent } from './category-add/category-add.component';
import { CategoryEditComponent } from './category-edit/category-edit.component';
import { CategoryRoutingModule } from './category-routing.module';
import { SharedModule } from '../shared/shared.module';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CategoryComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryEditComponent
  ],
  imports: [CategoryRoutingModule, SharedModule, CommonModule, FormsModule],
})
export class CategoryModule { }
