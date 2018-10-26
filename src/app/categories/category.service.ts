import { Injectable } from '@angular/core';
import { Category } from './category.model';
import { RepositoryService } from '../repository.service';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  categoryList: Category[] = [];

  constructor(private repositoryService: RepositoryService) {
    // this.addCategory(new Category('Fruits'));
    // this.addCategory(new Category('Dairy'));
    // this.addCategory(new Category('Vegetables'));
    // this.addCategory(new Category('Electronics'));
    // this.addCategory(new Category('Bills'));
    // this.addCategory(new Category('Misc'));

    this.categoryList = this.repositoryService.getCategories();
  }

  getCategories() {
    return this.categoryList.slice();
  }

  getCategoryById(id: number) {
    const foundCategory = this.categoryList.find(c => c.id === id);

    return foundCategory;
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

  deleteCategory(categoryId: number) {
    this.categoryList.splice(
      this.categoryList.indexOf(this.getCategoryById(categoryId)),
      1
    );
  }
}
