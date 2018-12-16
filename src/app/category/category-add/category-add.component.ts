import { Component, OnInit, ViewChild } from "@angular/core";
import { Router, ActivatedRoute } from "@angular/router";
import { NgForm } from "@angular/forms";

import { CategoryService } from "../category.service";
import { ItemService } from "src/app/item/item.service";
import { MatInput } from "@angular/material";
import { Category } from "src/app/models/models.model";

@Component({
  selector: "app-category-add",
  templateUrl: "./category-add.component.html",
  styleUrls: ["./category-add.component.css"]
})
export class CategoryAddComponent implements OnInit {
  @ViewChild("catForm") catForm: NgForm;
  @ViewChild("catName") catName: MatInput;

  itemsListObservable: any;

  constructor(
    private categoryService: CategoryService,
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.itemsListObservable = this.itemService.getItems();
  }

  SaveClick() {
    if (this.catForm.valid) {
      const newCategory: Category = {
        categoryId: 0,
        name: this.catName.value,
        itemCategories: this.catForm.value.itemIds.map(i => {
          return { itemId: i, categoryId: 0 };
        })
      };

      this.categoryService.addCategory(newCategory).subscribe(response => {
        this.NavigateToList();
      });
    }
  }

  CancelClick() {
    this.NavigateToList();
  }

  NavigateToList() {
    this.router.navigate(["../list"], { relativeTo: this.route });
  }
}
