import { Component, OnInit, ViewChild } from "@angular/core";
import { Expense, Category } from "src/app/models/models.model";
import { MatTable } from "@angular/material";
import { ExpensesService } from "../expenses.service";
import { Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: "app-expenses-list",
  templateUrl: "./expenses-list.component.html",
  styleUrls: ["./expenses-list.component.css"]
})
export class ExpensesListComponent implements OnInit {
  expenses: Expense[];

  tableColumns = ["name", "items", "options"];

  @ViewChild("expListTable")
  expListTable: MatTable<Expense>;

  constructor(
    private expensesService: ExpensesService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.refreshTable();
  }

  refreshTable() {
    this.expenses = this.expensesService.getExpenses();
    this.expListTable.dataSource = this.expenses;
    this.expListTable.renderRows();

    // this.categoryService.getCategories().subscribe(categoryList => {
    //   this.categories = categoryList;
    //   this.catListTable.dataSource = this.categories;
    //   this.catListTable.renderRows();
    // });
  }

  getItemsString(category: Category) {
    // if (category.itemCategories.length > 0) {
    //   return category.itemCategories.map(ic => ic.item.name).join(", ");
    // }
    // return "";
  }

  EditClick(expenseId: number) {
    // this.router.navigate(["../edit", categoryId.toString()], {
    //   relativeTo: this.route
    // });
  }

  DeleteClick(categoryId: number) {
    //   this.categoryService
    //     .deleteCategory(categoryId)
    //     .subscribe(response => this.refreshTable());
  }
}
