import { Injectable } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { Category } from '../models/models.model';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class CategoryService {
  theCategories: Subject<Category>;

  categoryList: Category[] = [];

  constructor(private repositoryService: RepositoryService) {
    // this.addCategory(new Category('Fruits'));
    // this.addCategory(new Category('Dairy'));
    // this.addCategory(new Category('Vegetables'));
    // this.addCategory(new Category('Electronics'));
    // this.addCategory(new Category('Bills'));
    // this.addCategory(new Category('Misc'));
  }

  getCategories() {
    return this.repositoryService.getCategories();
  }

  getCategoryById(id: number) {
    const foundCategory = this.categoryList.find(c => id === c.categoryId);

    return foundCategory;
  }

  addCategory(category: Category) {
    return this.repositoryService.insertCategory(category);
  }

  updateCategory(updatedCategory: Category) {
    const oldCategoryIndex = this.categoryList.findIndex(
      c => c.categoryId === updatedCategory.categoryId
    );

    this.categoryList[oldCategoryIndex] = updatedCategory;
  }

  deleteCategory(categoryId: number) {
    return this.repositoryService.deleteCategory(categoryId);
    // this.categoryList.splice(
    //   this.categoryList.indexOf(this.getCategoryById(categoryId)),
    //   1
    // );
  }

  getCategoryByName(name: string) {
    const foundCategory = this.categoryList.find(c => c.name === name);

    return foundCategory;
  }
}
