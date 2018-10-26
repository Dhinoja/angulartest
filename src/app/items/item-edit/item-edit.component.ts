import { Component, OnInit } from '@angular/core';
import { ItemService } from '../item.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Item } from '../item.model';

@Component({
  selector: 'app-item-edit',
  templateUrl: './item-edit.component.html',
  styleUrls: ['./item-edit.component.css']
})
export class ItemEditComponent implements OnInit {
  editItem: Item;
  editItemId = 0;

  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {
    this.editItemId = +this.route.snapshot.params['id'];
  }

  ngOnInit() {
    const foundItem = this.itemService.getItemById(this.editItemId);

    this.editItem = foundItem;
  }

  UpdateClick() {
    this.itemService.updateItem(this.editItemId, this.editItem);
    this.NavigateToList();
  }

  CancelClick() {
    this.NavigateToList();
  }

  NavigateToList() {
    this.router.navigate(['../../list'], { relativeTo: this.route });
  }
}
