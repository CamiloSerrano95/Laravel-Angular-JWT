import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  role:string;
  user:any = JSON.parse(localStorage.getItem('user'));
  data:[] = this.user.user;
  constructor( 
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
    this.role = this.user.user['user'].role;
  }

  logout() {
    this.authService.logoutUser().subscribe(response => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }
}
