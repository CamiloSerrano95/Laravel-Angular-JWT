import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    console.log(this.registerForm.value);
  }

  private initForm() {
    this.registerForm = new FormGroup({
      'name' : new FormControl('', Validators.required),
      'email' : new FormControl('', Validators.required),
      'password' : new FormControl('', Validators.required)
    });
  }

}
