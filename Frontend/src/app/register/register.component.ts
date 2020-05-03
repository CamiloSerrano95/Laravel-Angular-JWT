import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { pipe } from 'rxjs';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  registerForm: FormGroup;
  message:string;
  messageError:string;
  errors:[] = [];

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
      this.messageError = dataError.message;
      
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
