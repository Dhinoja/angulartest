import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
// tslint:disable-next-line:import-blacklist
import 'rxjs/Rx';

import { Category, Item, ItemCategories } from './models/models.model';

@Injectable()
export class RepositoryService {
  // private databaseUrl = 'https://ng-test-17074.firebaseio.com/';
  private databaseUrl = 'http://localhost:49034/api/';

  private categoriesUrl = this.databaseUrl + 'categories';
  private itemsUrl = this.databaseUrl + 'items';
  private itemCategoriesUrl = this.databaseUrl + 'itemcategories';

  private itemsList: Item[] = [];
  private categoryList: Category[] = [];
  private itemCategories: ItemCategories[] = [];

  constructor(private http: Http) {
    //#region Create Categories
    const catDairy = new Category('Dairy');
    const catFruits = new Category('Fruits');
    const catVeg = new Category('Vegetables');
    const catElec = new Category('Electronics');
    const catBills = new Category('Bills');
    const catMisc = new Category('Misc');
    //#endregion

    //#region Create Items
    const itemMilk = new Item('Milk');
    const itemCurd = new Item('Curd');
    const itemChilli = new Item('Chilli');
    const itemApple = new Item('Apple');
    const itemMilkBill = new Item('Milkman Bill');
    //#endregion

    //#region Set Categories to Items
    // itemMilk.categories.push(catDairy);
    this.itemCategories.push({
      itemId: itemMilk.itemId,
      categoryId: catDairy.categoryId
    });
    // itemCurd.categories.push(catDairy);
    this.itemCategories.push({
      itemId: itemCurd.itemId,
      categoryId: catDairy.categoryId
    });
    // itemChilli.categories.push(catVeg);
    this.itemCategories.push({
      itemId: itemChilli.itemId,
      categoryId: catVeg.categoryId
    });
    // itemApple.categories.push(catFruits);
    this.itemCategories.push({
      itemId: itemApple.itemId,
      categoryId: catFruits.categoryId
    });
    // itemMilkBill.categories.push(catBills);
    this.itemCategories.push({
      itemId: itemMilkBill.itemId,
      categoryId: catBills.categoryId
    });
    // itemMilkBill.categories.push(catDairy);
    this.itemCategories.push({
      itemId: itemMilkBill.itemId,
      categoryId: catDairy.categoryId
    });
    //#endregion

    //#region Set Items to Categories
    // catDairy.items.push(itemMilk);
    // catDairy.items.push(itemCurd);
    // catDairy.items.push(itemMilkBill);
    // catVeg.items.push(itemChilli);
    // catFruits.items.push(itemApple);
    // catBills.items.push(itemMilkBill);
    //#endregion

    this.itemsList.push(itemMilk);
    this.itemsList.push(itemCurd);
    this.itemsList.push(itemChilli);
    this.itemsList.push(itemApple);
    this.itemsList.push(itemMilkBill);

    // this.categoryList.push(catDairy);
    // this.categoryList.push(catFruits);
    // this.categoryList.push(catVeg);
    // this.categoryList.push(catElec);
    // this.categoryList.push(catBills);
    // this.categoryList.push(catMisc);
  }

  getItems() {
    return this.itemsList;
  }

  // getCategories() {
  //   return this.fetchCategories();
  // }

  fetchCategories() {
    return this.http.get(this.categoriesUrl).map((response: Response) => {
      const data: Category[] = response.json();
      return data;
    });
  }

  fetchItems() {
    return this.http.get(this.itemsUrl).map((response: Response) => {
      const data: Item[] = response.json();
      return data;
    });
  }

  saveCategories() {
    return this.http.post(this.categoriesUrl, new Category('Dairy'));
  }
  saveItems() {
    return this.http.put(this.itemsUrl, this.itemsList);
  }
  saveItemCategories() {
    return this.http.put(this.itemCategoriesUrl, this.itemCategories);
  }

  getCategories() {
    return this.http.get(this.categoriesUrl).map((response: Response) => {
      const data: Category[] = response.json();
      return data;
    });
  }
  getCategoryById(id) {
    return this.http
      .get(this.categoriesUrl + '/' + id)
      .map((response: Response) => {
        const data: Category = response.json();
        return data;
      });
  }
  insertCategory(category) {
    return this.http.post(this.categoriesUrl, category);
  }
  updateCategory(category) {
    return this.http.put(
      this.categoriesUrl + '/' + category.categoryId,
      category
    );
  }
  deleteCategory(id) {
    return this.http.delete(this.categoriesUrl + '/' + id);
  }
}
