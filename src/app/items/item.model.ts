export class Item {
  static maxId = 0;

  public id: number;
  public name: string;

  constructor(name: string) {
    this.id = ++Item.maxId;
    this.name = name;
  }
}
