import { Component, OnInit, ViewChild } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item, Category } from 'src/app/models/models.model';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  @ViewChild('itemForm') itemForm: NgForm;

  editItem: Item;
  editItemId: number;
  categoriesList: Category[];

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editItemId = +this.route.snapshot.params['id'];
  }

  ngOnInit() {
    this.itemService
      .getItemById(this.editItemId)
      .subscribe(response => this.itemForm.form.patchValue(response));
  }

  UpdateClick() {
    if (this.itemForm.valid) {
      console.log(this.itemForm.value);
      this.itemService
        .updateItem(this.itemForm.value)
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