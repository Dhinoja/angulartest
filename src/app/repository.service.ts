import { Injectable } from '@angular/core';
import { Item } from './items/item.model';
import { Category } from './categories/category.model';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private itemsList: Item[] = [];
  private categoryList: Category[] = [];

  constructor() {
    this.itemsList.push(new Item('Milk'));
    this.itemsList.push(new Item('Curd'));
    this.itemsList.push(new Item('Chilli'));
    this.itemsList.push(new Item('Apple'));
    this.itemsList.push(new Item('Milkman Bill'));

    this.categoryList.push(new Category('Fruits'));
    this.categoryList.push(new Category('Dairy'));
    this.categoryList.push(new Category('Vegetables'));
    this.categoryList.push(new Category('Electronics'));
    this.categoryList.push(new Category('Bills'));
    this.categoryList.push(new Category('Misc'));
  }

  getItems() {
    return this.itemsList;
  }

  getCategories() {
    return this.categoryList;
  }
}
