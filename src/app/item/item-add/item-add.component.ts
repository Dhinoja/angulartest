import { Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';

import { ItemService } from '../item.service';

@Component({
  selector: 'app-item-add',
  templateUrl: './item-add.component.html',
  styleUrls: ['./item-add.component.css']
})
export class ItemAddComponent implements OnInit {
  @ViewChild('itemForm') itemForm: NgForm;

  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {}

  SaveClick() {
    if (this.itemForm.valid) {
      this.itemService
        .addItem(this.itemForm.value)
        .subscribe(response => this.NavigateToList());
    }
  }

  CancelClick() {
    this.NavigateToList();
  }

  NavigateToList() {
    this.router.navigate(['../list'], { relativeTo: this.route });
  }
}
