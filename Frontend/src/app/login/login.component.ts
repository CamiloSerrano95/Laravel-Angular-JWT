import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    console.log(this.loginForm.value);
  }

  private initForm() {
    this.loginForm = new FormGroup({
      'email' : new FormControl('', Validators.required),
      'password' : new FormControl('', Validators.required)
    });
  }
}
