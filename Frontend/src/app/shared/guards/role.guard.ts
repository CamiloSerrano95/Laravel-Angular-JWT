import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class RoleGuard implements CanActivate {

  constructor(
    public router: Router
  ) {}

  canActivate(route: ActivatedRouteSnapshot): boolean {
    let user = JSON.parse(localStorage.getItem('user'));
    let expectedRole = route.data.expectedRole;
    
    if (user.user['user'].role == expectedRole) {
      return true;
    }
    
    this.router.navigate(['client']);
    return false;
  }
  
}
