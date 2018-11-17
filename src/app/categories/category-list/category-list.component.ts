import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

import { Category } from '../category.model';
import { CategoryService } from '../category.service';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];

  tableColumns = ['Name', 'Items', 'Options'];

  constructor(
    private categoryService: CategoryService,
    public router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.categories = this.categoryService.getCategories();
  }

  getItemsString(category: Category) {
    return category.items.map(i => i.name).join(', ');
  }

  EditClick(categoryId: number) {
    this.router.navigate(['../edit', categoryId], { relativeTo: this.route });
    console.log(categoryId);
  }
}
