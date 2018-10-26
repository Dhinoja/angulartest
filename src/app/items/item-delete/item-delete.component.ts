import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ItemService } from '../item.service';

@Component({
  template: ''
})
export class ItemDeleteComponent implements OnInit {
  constructor(
    private itemService: ItemService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit() {
    const itemId = +this.route.snapshot.params['id'];

    this.itemService.deleteItem(itemId);

    this.NavigateToList();
  }

  NavigateToList() {
    this.router.navigate(['../../list'], { relativeTo: this.route });
  }
}
