import { Component, OnInit } from '@angular/core';
import { UsersService } from './users.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  users:any;
  message:string;

  constructor(
    private userService: UsersService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.userService.getAllUsers().subscribe(data => {
      this.users = data['data'];
    }, error => {
      if (error.error.status == 401) {
        this.router.navigate(['client']);
      }
    });
  }

  delete(id:string) {
    this.userService.userDelete(id).subscribe(data => {
      this.getAll();
      this.message = data['msg'];
    })
  }
}
