import { Component, OnInit } from '@angular/core';

import { Item } from '../item';
import { ItemService } from '../item.service';

@Component({
  selector: 'app-items',
  templateUrl: './items.component.html',
  styleUrls: ['./items.component.css']
})
export class ItemsComponent implements OnInit {

  items: Item[];
  color: string = "white"; 
  order: {item: Item, total: number}[];
  constructor(private itemService: ItemService) { }

  ngOnInit() {
    this.itemService.getUsers()
    .then(items => this.items = items);
    for(let item in this.items) {
      //this.order.push({item: item, total:0})
    }
  }

}
