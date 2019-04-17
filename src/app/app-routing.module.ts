import { NgModule } from "@angular/core";
import { RouterModule, Routes, PreloadAllModules } from "@angular/router";

import { HomeComponent } from "./core/home/home.component";
import { AuthGuard } from "./auth/auth-guard.service";

const appRoutes: Routes = [
  { path: "", component: HomeComponent },
  {
    path: "category",
    loadChildren: "./category/category.module#CategoryModule"
    // canActivate: [AuthGuard]
  },
  {
    path: "item",
    loadChildren: "./item/item.module#ItemModule"
    // canActivate: [AuthGuard]
  },
  {
    path: "expenses",
    loadChildren: "./expenses/expenses.module#ExpensesModule"
    //canActivate: [AuthGuard]
  },
  { path: "**", pathMatch: "full", redirectTo: " " }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes, {
      preloadingStrategy: PreloadAllModules,
      useHash: true
    })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
