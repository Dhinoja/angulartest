export class Category {
  static maxId = 0;

  public id: number;
  constructor(public name: string) {
    this.id = ++Category.maxId;
  }
}
