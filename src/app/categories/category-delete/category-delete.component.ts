import { Component, OnInit } from '@angular/core';
import { CategoryService } from '../category.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  template: ''
})
export class CategoryDeleteComponent implements OnInit {
  constructor(
    private categoryService: CategoryService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const categoryId = this.route.snapshot.params['id'];

    this.categoryService.deleteCategory(categoryId).subscribe(response => {
      this.NavigateToList();
    });
  }

  NavigateToList() {
    this.router.navigate(['../../list'], { relativeTo: this.route });
  }
}
