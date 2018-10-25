import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-edit',
  templateUrl: './category-edit.component.html',
  styleUrls: ['./category-edit.component.css']
})
export class CategoryEditComponent implements OnInit {
  editCategory: Category;
  editCategoryId = 0;
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editCategoryId = +route.snapshot.params['id'];
  }

  ngOnInit() {
    const foundCategory = this.categoryService.getCategoryById(
      this.editCategoryId
    );

    this.editCategory = foundCategory;
  }

  onUpdate() {
    this.categoryService.updateCategory(this.editCategoryId, this.editCategory);
    this.router.navigate(['../../list'], { relativeTo: this.route });
  }
}
