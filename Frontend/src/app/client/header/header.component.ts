import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/shared/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor( 
    private authService: AuthService,
    private router: Router
    ) { }

  ngOnInit(): void {
  }

  logout() {
    this.authService.logoutUser().subscribe(response => {
      localStorage.removeItem('user');
      this.router.navigate(['login']);
    })
  }
}
