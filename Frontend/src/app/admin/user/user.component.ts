import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any;

  constructor(private userService: UsersService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data['data'];
    });
  }
}
