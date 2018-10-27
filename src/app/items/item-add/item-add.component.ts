import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { ItemService } from '../item.service';
import { Item } from '../item.model';
import { Category } from 'src/app/categories/category.model';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {
  categories: Category[] = [];
  itemName: string;
  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  SaveClick() {
    this.itemService.addItem(new Item(this.itemName));
    this.NavigateToList();
  }

  CancelClick() {
    this.NavigateToList();
  }

  NavigateToList() {
    this.router.navigate(['../list'], { relativeTo: this.route });
  }
}
