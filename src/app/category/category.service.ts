import { Injectable } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { Category } from '../models/models.model';

@Injectable()
export class CategoryService {
  categoryList: Category[] = [];

  constructor(private repositoryService: RepositoryService) {}

  getCategories() {
    return this.repositoryService.getCategories();
  }

  getCategoryById(id: number) {
    return this.repositoryService.getCategoryById(id);
  }

  addCategory(category: Category) {
    return this.repositoryService.insertCategory(category);
  }

  updateCategory(updatedCategory: Category) {
    return this.repositoryService.updateCategory(updatedCategory);
  }

  deleteCategory(categoryId: number) {
    return this.repositoryService.deleteCategory(categoryId);
  }
}
