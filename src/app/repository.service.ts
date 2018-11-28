import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/Rx';

import { Category, Item, ItemCategories } from './models/models.model';

@Injectable()
export class RepositoryService {
  // private databaseUrl = 'https://ng-test-17074.firebaseio.com/';
  private databaseUrl = 'http://localhost:49034/api/';

  private categoriesUrl = this.databaseUrl + 'categories';
  private itemsUrl = this.databaseUrl + 'items';
  private itemCategoriesUrl = this.databaseUrl + 'itemcategories';

  constructor(private http: Http) {

  }

  // #region Categories
  getCategories() {
    return this.http.get(this.categoriesUrl).map((response: Response) => {
      const data: Category[] = response.json();
      return data;
    });
  }

  getCategoryById(categoryId: number) {
    return this.http
      .get(this.categoriesUrl + '/' + categoryId)
      .map((response: Response) => {
        const data: Category = response.json();
        return data;
      });
  }

  insertCategory(category: Category) {
    return this.http.post(this.categoriesUrl, category);
  }

  updateCategory(category: Category) {
    return this.http.put(
      this.categoriesUrl + '/' + category.categoryId,
      category
    );
  }

  deleteCategory(categoryId: number) {
    return this.http.delete(this.categoriesUrl + '/' + categoryId);
  }
  // #endregion

  // #region Items
  getItems() {
    return this.http.get(this.itemsUrl).map((response: Response) => {
      const data: Item[] = response.json();
      return data;
    });
  }

  getItemByItemId(itemId: number) {
    return this.http
      .get(this.itemsUrl + '/' + itemId)
      .map((response: Response) => {
        const data: Item = response.json();
        return data;
      });
  }

  insertItem(item: Item) {
    return this.http.post(this.itemsUrl, item);
  }

  updateItem(item: Item) {
    return this.http.put(this.itemsUrl + '/' + item.itemId, item);
  }

  deleteItem(itemId: number) {
    return this.http.delete(this.itemsUrl + '/' + itemId);
  }
  // #endregion
}
