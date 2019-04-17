import { Injectable } from "@angular/core";
import { Expense } from "../models/models.model";

@Injectable()
export class ExpensesService {
  tempExpenses: Expense[] = [];

  constructor() {
    this.tempExpenses.push({
      expenseId: 1,
      categoryId: 1,
      expenseName: "test Exp1"
    });
  }

  public getExpenses() {
    return this.tempExpenses;
  }
}
