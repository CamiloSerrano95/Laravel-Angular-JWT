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
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      if (this.id) {
        this.editMode = true;
        this.fillForm();
      }
    });
    this.initForm();
  }

  onSubmit() {
    if (this.id) {
      this.userService.userUpdate(this.id, this.userForm.value).subscribe(data => {
        this.msg = data['msg'];
        setTimeout(() => {
          this.editMode = false;
          this.onCancel();
        }, 3000);
        
      })
    } else {
      this.userService.newUser(this.userForm.value).subscribe(data => {
        this.msg = data['msg'];
        setTimeout(() => {
          this.router.navigate(['/admin']);
        }, 3000);
      })
    }
  }

  private initForm() {
    this.userForm = new FormGroup({
      'name' : new FormControl('', Validators.required),
      'email' : new FormControl('', Validators.required),
      'password' : new FormControl('', Validators.required)
    });
  }

  private fillForm() {
    this.userService.getUserById(this.id).subscribe(data => {
      this.userForm = new FormGroup({
        'name' : new FormControl(data['data'].name, Validators.required),
        'email' : new FormControl(data['data'].email, Validators.required)
      });
    }) 
  }

  onCancel() {
    this.router.navigate(['/admin']);
  }
}
