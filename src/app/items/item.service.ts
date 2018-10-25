import { Injectable } from '@angular/core';
import { Item } from './item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemList: Item[] = [];
  constructor() {
    this.addItem(new Item('Milk'));
    this.addItem(new Item('Curd'));
    this.addItem(new Item('Chilli'));
    this.addItem(new Item('Apple'));
  }

  addItem(item: Item) {
    this.itemList.push(item);
  }
}
