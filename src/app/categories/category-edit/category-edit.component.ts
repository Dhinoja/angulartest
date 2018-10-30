import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  @ViewChild('catForm')
  catForm: NgForm;

  editCategory: Category;
  editCategoryId = 0;
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editCategoryId = +this.route.snapshot.params['id'];
  }

  ngOnInit() {
    const foundCategory = this.categoryService.getCategoryById(
      this.editCategoryId
    );

    setTimeout(() => {
      this.catForm.form.patchValue(foundCategory);
    }, 10);

    this.editCategory = foundCategory;
  }

  submitForm() {
    if (this.catForm.valid) {
      this.categoryService.updateCategory(this.catForm.value);
      this.NavigateToList();
    }
  }

  UpdateClick() {}

  CancelClick() {
    this.NavigateToList();
  }

  NavigateToList() {
    this.router.navigate(['../../list'], { relativeTo: this.route });
  }
}
