import { Injectable } from '@angular/core';
import { Category } from './category.model';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryList: Category[] = [];

  constructor() {
    this.addCategory(new Category('Cat A'));
    this.addCategory(new Category('Cat B'));
    this.addCategory(new Category('Cat C'));
  }

  getCategories() {
    return this.categoryList.slice();
  }

  addCategory(category: Category) {
    this.categoryList.push(category);
  }

  updateCategory(categoryId: number, updatedCategory: Category) {
    const oldCategoryIndex = this.categoryList.findIndex(
      c => c.id === categoryId
    );

    this.categoryList[oldCategoryIndex] = updatedCategory;
  }

  getCategoryById(id: number) {
    const foundCategory = this.categoryList.find(c => c.id === id);

    return foundCategory;
  }

  deleteCategory(categoryId: number) {
    this.categoryList.splice(
      this.categoryList.indexOf(this.getCategoryById(categoryId)),
      1
    );
  }
}
