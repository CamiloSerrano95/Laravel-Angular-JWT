import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';
import { throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  loginUser(data:any) {
    const url = `${environment.apiUrl}/login`;
    return this.http.post(url, data);
  }

  registerUser(data:any) {
    const url = `${environment.apiUrl}/register`
    return this.http.post(url, data).pipe(
      catchError(this.handleError)
    )
  }

  isAuthenticated(): boolean {
    let user = JSON.parse(localStorage.getItem('user'));

    if (user !== null) {
      if (user.token) {
        return true;
      }
    }

    return false;
  }

  meInfo(token:string) {
    let headers = new HttpHeaders(
      {
        'Authorization': `Bearer ${token}`
      }
    );

    let options = { headers: headers };
    const url = `${environment.apiUrl}/userauth`

    return this.http.post(url, null, options);
  }

  handleError(error: HttpErrorResponse) {
    const errors = [];

    if (error.error) {
      errors['message'] = error.error.message;
      if (error.error.errors) {
        for (const property in error.error.errors) {
          if (error.error.errors.hasOwnProperty(property)) {
            const propertyErrors: Array<string> = error.error.errors[property];
            propertyErrors.forEach(error => errors.push(error));
          }
        }
      }
    }
    return throwError(errors);
  }
}
