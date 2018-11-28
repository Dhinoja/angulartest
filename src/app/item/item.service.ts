import { Injectable } from '@angular/core';
import { RepositoryService } from '../repository.service';
import { Item } from '../models/models.model';

@Injectable()
export class ItemService {
  itemList: Item[] = [];
  constructor(private repositoryService: RepositoryService) {}

  getItems() {
    return this.repositoryService.getItems();
  }

  getItemById(itemId: number) {
    return this.repositoryService.getItemByItemId(itemId);
  }

  addItem(item: Item) {
    return this.repositoryService.insertItem(item);
  }

  updateItem(updatedItem: Item) {
    return this.repositoryService.updateItem(updatedItem);
  }

  deleteItem(itemId: number) {
    return this.repositoryService.deleteItem(itemId);
  }
}
