import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { UsersService } from '../users.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-manager',
  templateUrl: './user-manager.component.html',
  styleUrls: ['./user-manager.component.css']
})
export class UserManagerComponent implements OnInit {

  userForm: FormGroup;
  editMode = false;
  id:string;
  msg:string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private userService: UsersService
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    this.userService.newUser(this.userForm.value).subscribe(data => {
      this.msg = data['msg'];
      setTimeout(() => {
        this.router.navigate(['/admin']);
      }, 3000);
    })
  }

  private initForm() {
    this.userForm = new FormGroup({
      'name' : new FormControl('', Validators.required),
      'email' : new FormControl('', Validators.required),
      'password' : new FormControl('', Validators.required)
    });
  }

  onCancel() {
    this.router.navigate(['/admin']);
  }
}
