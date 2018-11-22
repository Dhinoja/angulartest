import { Component, OnInit } from '@angular/core';

import { ItemService } from '../item.service';
import { Item } from 'src/app/models/models.model';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[];

  constructor(private itemService: ItemService) {}

  ngOnInit() {
    this.items = this.itemService.getItems();
  }
}
