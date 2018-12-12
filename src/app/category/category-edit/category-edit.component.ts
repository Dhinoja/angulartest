import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { NgForm } from '@angular/forms';
import { Category } from 'src/app/models/models.model';
import { ItemService } from 'src/app/item/item.service';
import { MatInput } from '@angular/material';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  @ViewChild('catForm') catForm: NgForm;
  @ViewChild('catName') catName: MatInput;
  @ViewChild('catId') catId: HTMLInputElement;

  editCategory: Category;
  editCategoryId: number;
  itemsListObservable: any;

  constructor(
    private categoryService: CategoryService,
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editCategoryId = +this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.categoryService
      .getCategoryById(this.editCategoryId)
      .subscribe(response => {
        this.catForm.form.patchValue(response);
        this.catForm.form.patchValue({
          itemIds: response.itemCategories.map(ic => ic.itemId)
        });
      });

    this.itemsListObservable = this.itemService.getItems();
  }

  UpdateClick() {
    if (this.catForm.valid) {
      console.log(this.catForm.value);

      console.log(
        this.catForm.value.itemIds.map(i => {
          return { itemId: i, categoryId: this.catId.value };
        })
      );

      const tempCategory: Category = {
        categoryId: +this.catId.value,
        name: this.catName.value,
        itemCategories: this.catForm.value.itemIds.map(i => {
          return { itemId: i, categoryId: this.catId.value };
        })
      };

      this.categoryService
        .updateCategory(tempCategory)
        .subscribe(response => this.NavigateToList());
    }
  }

  CancelClick() {
    this.NavigateToList();
  }

  NavigateToList() {
    this.router.navigate(['../../list'], { relativeTo: this.route });
  }
}
