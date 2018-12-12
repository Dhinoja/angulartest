import { Injectable } from '@angular/core';
import { Category } from '../models/models.model';
import { Http, Response } from '@angular/http';
import { AppSettings } from '../shared/settings';

@Injectable()
export class CategoryService {
  private categoriesApiUrl = AppSettings.Settings.Api.CategoriesApiUrl;

  constructor(private http: Http) {}

  getCategories() {
    return this.http.get(this.categoriesApiUrl).map((response: Response) => {
      const data: Category[] = response.json();
      return data;
    });
  }

  getCategoryById(categoryId: number) {
    return this.http
      .get(this.categoriesApiUrl + '/' + categoryId)
      .map((response: Response) => {
        const data: Category = response.json();
        return data;
      });
  }

  addCategory(category: Category) {
    return this.http.post(this.categoriesApiUrl, category);
  }

  updateCategory(updatedCategory: Category) {
    console.log(updatedCategory);
    return this.http.put(
      this.categoriesApiUrl + '/' + updatedCategory.categoryId,
      updatedCategory
    );
  }

  deleteCategory(categoryId: number) {
    return this.http.delete(this.categoriesApiUrl + '/' + categoryId);
  }

  getItems(categoryId: number) {}
}
