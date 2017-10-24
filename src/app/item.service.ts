import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';

import { Item } from './item';

@Injectable()
export class ItemService {

  private itemsUrl = 'api/items';

  constructor(private http: Http) { }

  getUsers(): Promise<Array<Item>> {
    return this.http
      .get(this.itemsUrl)
      .toPromise()
      .then((response) => {
        console.log(response);
        return response.json() as Item[];
      })
      .catch();
  }

}
