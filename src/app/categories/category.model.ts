import { Item } from '../items/item.model';

export class Category {
  static maxId = 0;

  public id: number;
  public name: string;
  public items: Item[] = [];

  constructor(name: string) {
    this.id = ++Category.maxId;
    this.name = name;
  }
}
