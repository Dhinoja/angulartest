import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material';

import { ItemService } from '../item.service';
import { Item } from 'src/app/models/models.model';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-item-list',
  templateUrl: './item-list.component.html',
  styleUrls: ['./item-list.component.css']
})
export class ItemListComponent implements OnInit {
  items: Item[];
  tableColumns = ['name', 'categories', 'options'];
  constructor(
    private itemService: ItemService,
    private router: Router,
    private route: ActivatedRoute
  ) { }

  @ViewChild('itemsListTable') itemsListTable: MatTable<Item>;

  ngOnInit() {
    this.refreshTable();
  }

  refreshTable() {
    this.itemService.getItems().subscribe(itemsList => {
      this.items = itemsList;
      this.itemsListTable.dataSource = this.items;
      this.itemsListTable.renderRows();
    });
  }

  EditClick(itemId: number) {
    this.router.navigate(['../edit', itemId], { relativeTo: this.route });
  }

  DeleteClick(itemId: number) {
    this.itemService.deleteItem(itemId).subscribe(response => this.refreshTable())
  }
}
