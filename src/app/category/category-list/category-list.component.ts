import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';

import { CategoryService } from 'src/app/category/category.service';
import { Category } from 'src/app/models/models.model';

@Component({
  selector: 'app-category-list',
  templateUrl: './category-list.component.html',
  styleUrls: ['./category-list.component.css']
})
export class CategoryListComponent implements OnInit {
  categories: Category[];

  tableColumns = ['name', 'items', 'options'];

  @ViewChild('catListTable')
  catListTable: MatTable<Category>;

  constructor(
    private categoryService: CategoryService,
    public router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.refreshTable();
  }

  refreshTable() {
    this.categoryService.getCategories().subscribe(categoryList => {
      this.categories = categoryList;
      this.catListTable.dataSource = this.categories;
      this.catListTable.renderRows();
    });
  }

  getItemsString(category: Category) {
    return category.items.map(i => i.name).join(', ');
  }

  EditClick(categoryId: number) {
    this.router.navigate(['../edit', categoryId.toString()], {
      relativeTo: this.route
    });
  }

  DeleteClick(categoryId: number) {
    this.categoryService.deleteCategory(categoryId).subscribe(response => this.refreshTable());
  }
}
