import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../shared/services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  message:string;
  errors:any;

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    this.authService.registerUser(this.registerForm.value).subscribe(data => {
      this.message = data['msg'];
      setTimeout(() => {
        this.router.navigate(['login']);
      }, 3000);
    }, dataError => {  
      this.errors = dataError;    
    });
  }

  private initForm() {
    this.registerForm = new FormGroup({
      'name' : new FormControl('', Validators.required),
      'email' : new FormControl('', Validators.required),
      'password' : new FormControl('', Validators.required)
    });
  }
}
