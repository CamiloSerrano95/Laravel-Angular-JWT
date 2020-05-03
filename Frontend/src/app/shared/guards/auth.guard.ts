import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  
  constructor(
    private authService: AuthService,
    public router: Router
  ){}

  canActivate(): boolean {    
    if(!this.authService.isAuthenticated()) {
      this.router.navigate(['/']);
      return false;
    }

    return true;
  }
  
}
