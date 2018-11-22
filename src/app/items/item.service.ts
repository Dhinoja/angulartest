import { Injectable } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { Item } from '../models/models.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  itemList: Item[] = [];
  constructor(private repositoryService: RepositoryService) {
    // this.addItem(new Item('Milk'));
    // this.addItem(new Item('Curd'));
    // this.addItem(new Item('Chilli'));
    // this.addItem(new Item('Apple'));

    this.itemList = this.repositoryService.getItems();
  }

  getItems() {
    return this.itemList.slice();
  }

  getItemById(id: number) {
    const foundItem = this.itemList.find(i => i.itemId === id);

    return foundItem;
  }

  addItem(item: Item) {
    this.itemList.push(item);
  }

  updateItem(itemId: number, updatedCategory: Item) {
    const oldItemIndex = this.itemList.findIndex(i => i.itemId === itemId);

    this.itemList[oldItemIndex] = updatedCategory;
  }

  deleteItem(itemId: number) {
    this.itemList.splice(this.itemList.indexOf(this.getItemById(itemId)), 1);
  }

  getItemByName(name: string) {
    const foundItem = this.itemList.find(i => i.name === name);

    return foundItem;
  }
}
