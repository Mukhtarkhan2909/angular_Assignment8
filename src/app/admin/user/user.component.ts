import { Component, OnInit } from '@angular/core';
import {UserService} from '../services/user.service';
import {UserDetails} from '../services/userDetais';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
export class UserComponent implements OnInit {

  users: UserDetails[] = this.userService.getUser();
  constructor(private userService: UserService) { }

  ngOnInit(): void {
  }

}
