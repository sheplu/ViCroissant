import { Component, OnInit} from '@angular/core';


import { User } from './user';
import { UserService } from './user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'ViCroissant';

  constructor(
    private userService: UserService) {
      
  }

  ngOnInit(): void {
    
  }
}
