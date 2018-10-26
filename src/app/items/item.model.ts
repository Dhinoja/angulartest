import { Category } from '../categories/category.model';

export class Item {
  static maxId = 0;

  public id: number;
  public name: string;
  public categories: Category[] = [];

  constructor(name: string) {
    this.id = ++Item.maxId;
    this.name = name;
  }
}
