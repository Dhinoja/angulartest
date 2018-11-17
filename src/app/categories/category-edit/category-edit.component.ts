import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '../category.model';
import { CategoryService } from '../category.service';
import { NgForm } from '@angular/forms';
import { ItemService } from 'src/app/items/item.service';
import { Item } from 'src/app/items/item.model';

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

  itemsList: Item[];
  //  = [
  //   'Extra cheese',
  //   'Mushroom',
  //   'Onion',
  //   'Pepperoni',
  //   'Sausage',
  //   'Tomato'
  // ];

  constructor(
    private categoryService: CategoryService,
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editCategoryId = +this.route.snapshot.params['id'];
  }

  ngOnInit() {
    const foundCategory = this.categoryService.getCategoryById(
      this.editCategoryId
    );

    this.itemsList = this.itemService.getItems();

    setTimeout(() => {
      this.catForm.form.patchValue(foundCategory);
    }, 10);

    this.editCategory = foundCategory;
  }

  UpdateClick() {
    if (this.catForm.valid) {
      console.log(this.catForm.value);
      // this.categoryService.updateCategory(this.catForm.value);
      // this.NavigateToList();
    }
  }

  CancelClick() {
    this.NavigateToList();
  }

  NavigateToList() {
    this.router.navigate(['../../list'], { relativeTo: this.route });
  }
}
