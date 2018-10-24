import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { CategoriesComponent } from './categories/categories.component';
import { CategoryListComponent } from './categories/category-list/category-list.component';
import { CategoryAddComponent } from './categories/category-add/category-add.component';

const routes: Routes = [
  {
    path: 'categories',
    component: CategoriesComponent,
    children: [
      { path: 'list', component: CategoryListComponent },
      { path: 'add', component: CategoryAddComponent }
    ]
  },
  { path: '**', pathMatch: 'full', redirectTo: 'routePath' }
];

@NgModule({
  declarations: [
    AppComponent,
    CategoriesComponent,
    CategoryListComponent,
    CategoryAddComponent
  ],
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
