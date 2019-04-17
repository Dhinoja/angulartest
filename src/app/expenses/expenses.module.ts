import { HttpModule } from "@angular/http";
import { ExpensesComponent } from "./expenses.component";
import { NgModule } from "@angular/core";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";
import { ExpensesListComponent } from "./expenses-list/expenses-list.component";
import { ExpensesRoutingModule } from "./expenses-routing.module";
import { CategoryService } from "../category/category.service";
import { ItemService } from "../item/item.service";
import { ExpensesService } from "./expenses.service";

@NgModule({
  declarations: [ExpensesComponent, ExpensesListComponent],
  imports: [
    HttpModule,
    ExpensesRoutingModule,
    SharedModule,
    CommonModule,
    FormsModule
  ],
  providers: [ExpensesService, CategoryService, ItemService]
})
export class ExpensesModule {}
