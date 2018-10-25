export class Category {
  static maxId = 0;

  public id: number;
  public name: string;

  constructor(name: string) {
    this.id = ++Category.maxId;
    this.name = name;
  }
}
