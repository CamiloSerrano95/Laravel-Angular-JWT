import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;

  constructor(
    private authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.initForm();
  }

  onSubmit() {
    this.authService.loginUser(this.loginForm.value).subscribe(data => {
      localStorage.setItem('user', JSON.stringify(data));
      this.authService.meInfo(data['token']).subscribe(response => {
        let user = JSON.parse(localStorage.getItem('user'));
        user.user = response;
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['admin'])
      })
    });
  }

  private initForm() {
    this.loginForm = new FormGroup({
      'email' : new FormControl('', Validators.required),
      'password' : new FormControl('', Validators.required)
    });
  }
}
