import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CategoryService } from '../category.service';
import { NgForm } from '@angular/forms';
import { ItemService } from 'src/app/item/item.service';
import { Category, Item } from 'src/app/models/models.model';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  @ViewChild('catForm') catForm: NgForm;

  editCategory: Category;
  editCategoryId: number;
  itemsList: Item[];

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
      .subscribe(response => this.catForm.form.patchValue(response));

    this.itemService
      .getItems()
      .subscribe(response => (this.itemsList = response));
  }

  UpdateClick() {
    if (this.catForm.valid) {
      console.log(this.catForm.value);
      this.categoryService
        .updateCategory(this.catForm.value)
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
