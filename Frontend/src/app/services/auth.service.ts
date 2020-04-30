import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

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
    return this.http.post(url, data);
  }
}
