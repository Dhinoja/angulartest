import { Injectable } from '@angular/core';
import { Item } from './items/item.model';
import { Category } from './categories/category.model';
import { registerContentQuery } from '@angular/core/src/render3/instructions';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {
  private itemsList: Item[] = [];
  private categoryList: Category[] = [];

  constructor() {
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
    itemMilk.categories.push(catDairy);
    itemCurd.categories.push(catDairy);
    itemChilli.categories.push(catVeg);
    itemApple.categories.push(catFruits);
    itemMilkBill.categories.push(catBills);
    itemMilkBill.categories.push(catDairy);
    //#endregion

    //#region Set Items to Categories
    catDairy.items.push(itemMilk);
    catDairy.items.push(itemCurd);
    catDairy.items.push(itemMilkBill);
    catVeg.items.push(itemChilli);
    catFruits.items.push(itemApple);
    catBills.items.push(itemMilkBill);
    //#endregion

    this.itemsList.push(itemMilk);
    this.itemsList.push(itemCurd);
    this.itemsList.push(itemChilli);
    this.itemsList.push(itemApple);
    this.itemsList.push(itemMilkBill);

    this.categoryList.push(catDairy);
    this.categoryList.push(catFruits);
    this.categoryList.push(catVeg);
    this.categoryList.push(catElec);
    this.categoryList.push(catBills);
    this.categoryList.push(catMisc);
  }

  getItems() {
    return this.itemsList;
  }

  getCategories() {
    return this.categoryList;
  }
}
