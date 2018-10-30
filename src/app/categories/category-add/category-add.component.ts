import { Component, OnInit, ViewChild } from '@angular/core';
import { CategoryService } from '../category.service';
import { Category } from '../category.model';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-category-add',
  templateUrl: './category-add.component.html',
  styleUrls: ['./category-add.component.css']
})
export class CategoryAddComponent implements OnInit {
  @ViewChild('catForm')
  catForm: NgForm;

  categoryName: string;
  constructor(
    private categoryService: CategoryService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  submitForm() {
    if (this.catForm.valid) {
      this.categoryService.addCategory(this.catForm.value);
      this.NavigateToList();
    }
  }
  SaveClick() {
    this.NavigateToList();
  }

  CancelClick() {
    this.NavigateToList();
  }

  NavigateToList() {
    this.router.navigate(['../list'], { relativeTo: this.route });
  }
}
