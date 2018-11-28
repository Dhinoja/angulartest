import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ItemComponent } from './item.component';
import { ItemAddComponent } from './item-add/item-add.component';
import { ItemListComponent } from './item-list/item-list.component';
import { ItemEditComponent } from './item-edit/item-edit.component';

const itemRoutes: Routes = [
  {
    path: '',
    component: ItemComponent,
    children: [
      { path: '', redirectTo: 'list', pathMatch: 'full' },
      { path: 'list', component: ItemListComponent },
      { path: 'add', component: ItemAddComponent },
      { path: 'edit/:id', component: ItemEditComponent }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(itemRoutes)],
  exports: [RouterModule]
})
export class ItemRoutingModule { }
