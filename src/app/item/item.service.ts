import { Injectable } from '@angular/core';
import { Item } from '../models/models.model';
import { Http, Response } from '@angular/http';
import { AppSettings } from '../shared/settings';
import 'rxjs/Rx';

@Injectable()
export class ItemService {
  private itemsApiUrl = AppSettings.Settings.Api.ItemsApiUrl;
  constructor(private http: Http) {}

  getItems() {
    return this.http.get(this.itemsApiUrl).map((response: Response) => {
      const data: Item[] = response.json();
      return data;
    });
  }

  getItemById(itemId: number) {
    return this.http
      .get(this.itemsApiUrl + '/' + itemId)
      .map((response: Response) => {
        const data: Item = response.json();
        return data;
      });
  }

  addItem(item: Item) {
    return this.http.post(this.itemsApiUrl, item);
  }

  updateItem(updatedItem: Item) {
    return this.http.put(
      this.itemsApiUrl + '/' + updatedItem.itemId,
      updatedItem
    );
  }

  deleteItem(itemId: number) {
    return this.http.delete(this.itemsApiUrl + '/' + itemId);
  }
}
