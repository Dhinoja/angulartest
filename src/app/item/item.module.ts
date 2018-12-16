import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";
import { ItemRoutingModule } from "./item-routing.module";
import { ItemComponent } from "./item.component";
import { ItemAddComponent } from "./item-add/item-add.component";
import { ItemEditComponent } from "./item-edit/item-edit.component";
import { ItemListComponent } from "./item-list/item-list.component";
import { SharedModule } from "../shared/shared.module";
import { FormsModule } from "@angular/forms";
import { HttpModule } from "@angular/http";
import { ItemService } from "./item.service";
import { CategoryService } from "../category/category.service";

@NgModule({
  imports: [
    CommonModule,
    ItemRoutingModule,
    SharedModule,
    FormsModule,
    HttpModule
  ],
  declarations: [
    ItemComponent,
    ItemListComponent,
    ItemAddComponent,
    ItemEditComponent
  ],
  providers: [ItemService, CategoryService]
})
export class ItemModule {}
