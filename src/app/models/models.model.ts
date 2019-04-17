export class Category {
  public categoryId: number;
  public name: string;
  // public itemIds: number[] = [];
  public itemCategories: ItemCategories[];
}

export class Item {
  public itemId: number;
  public name: string;
  public categoryIds: number[] = [];
}

export class ItemCategories {
  public itemId: number;
  public item: Item;
  public categoryId: number;
  public category: Category;
}

export class Expense {
  public expenseId: number;
  public categoryId: number;
  public expenseName: string;
}
