import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { ExpensesComponent } from "./expenses.component";
import { ExpensesListComponent } from "./expenses-list/expenses-list.component";

const expensesRoutes: Routes = [
  {
    path: "",
    component: ExpensesComponent,
    children: [
      { path: "", redirectTo: "list", pathMatch: "full" },
      { path: "list", component: ExpensesListComponent }
      //   { path: "add", component: CategoryAddComponent },
      //   { path: "edit/:id", component: CategoryEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(expensesRoutes)],
  exports: [RouterModule]
})
export class ExpensesRoutingModule {}
