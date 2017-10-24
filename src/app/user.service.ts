import { Injectable } from '@angular/core';
import { Headers, Http, Response } from '@angular/http';

import 'rxjs/add/operator/toPromise';


import { User } from './user';

@Injectable()
export class UserService {

  private usersUrl = 'api/users';

  constructor(private http: Http) { }

  getUsers(): Promise<Array<User>> {
    return this.http
      .get(this.usersUrl)
      .toPromise()
      .then((response) => {
        console.log(response);
        return response.json() as User[];
      })
      .catch();
  }


}
