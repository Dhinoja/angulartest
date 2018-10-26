import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryAddComponent } from './categories/category-add/category-add.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { CategoryDeleteComponent } from './categories/category-delete/category-delete.component';
import { ItemsComponent } from './items/items.component';
import { ItemListComponent } from './items/item-list/item-list.component';
import { ItemAddComponent } from './items/item-add/item-add.component';
import { ItemDeleteComponent } from './items/item-delete/item-delete.component';
import { ItemEditComponent } from './items/item-edit/item-edit.component';

const appRoutes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent,
    children: [
      { path: 'list', component: CategoryListComponent },
      { path: 'add', component: CategoryAddComponent },
      { path: 'edit/:id', component: CategoryEditComponent },
      { path: 'delete/:id', component: CategoryDeleteComponent }
    ]
  },
  {
    path: 'items',
    component: ItemsComponent,
    children: [
      { path: 'list', component: ItemListComponent },
      { path: 'add', component: ItemAddComponent },
      { path: 'edit/:id', component: ItemEditComponent },
      { path: 'delete/:id', component: ItemDeleteComponent }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: ' ' }
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
