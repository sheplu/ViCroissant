import { Component, OnInit } from '@angular/core';

import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.css']
})
export class TeamComponent implements OnInit {

  users: User[] = [];
  test = new Map();

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.test.set('key', 'value');
    console.log(this.test);
    this.userService.getUsers()
      .then(users => this.users = users);
  }

}
