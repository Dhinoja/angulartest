import { Injectable } from '@angular/core';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryList: Category[] = [];

  constructor() {
    this.categoryList.push(new Category('Cat A'));
    this.categoryList.push(new Category('Cat B'));
    this.categoryList.push(new Category('Cat C'));
  }

  getCategories() {
    return this.categoryList.slice();
  }
}
