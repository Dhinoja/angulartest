export class Category {
  public categoryId: number;
  public name: string;
  public items: Item[] = [];

  constructor(name: string) {
    // this.categoryId = Guid.create();
    this.name = name;
  }
}

export class Item {
  public itemId: number;
  public name: string;
  public categories: Category[] = [];

  constructor(name: string) {
    // this.itemId = Guid.create();
    this.name = name;
  }
}

export class ItemCategories {
  constructor(public itemId: number, public categoryId: number) {}
}
