import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryAddComponent } from './categories/category-add/category-add.component';
import { CategoryEditComponent } from './categories/category-edit/category-edit.component';
import { NavheaderComponent } from './navheader/navheader.component';
import { CategoryDeleteComponent } from './categories/category-delete/category-delete.component';

const routes: Routes = [
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
  { path: '**', pathMatch: 'full', redirectTo: ' ' }
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryListComponent,
    CategoryAddComponent,
    CategoryEditComponent,
    NavheaderComponent,
    CategoryDeleteComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routes, { useHash: true })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
