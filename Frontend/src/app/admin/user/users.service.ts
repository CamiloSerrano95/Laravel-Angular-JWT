import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  data:any;
  constructor(
    private http: HttpClient
  ) { }

  getAllUsers() {
    const url = `${environment.apiUrl}/user/all`
    return this.http.get(url, this.getHeader());
  }

  getUserById(id:string) {
    const url = `${environment.apiUrl}/user/getById/${id}`
    return this.http.get(url, this.getHeader());
  }

  newUser(data:any) {
    const url = `${environment.apiUrl}/user/store`;
    return this.http.post(url, data, this.getHeader());
  }

  userDelete(id:string) {
    const url = `${environment.apiUrl}/user/delete/${id}`;
    return this.http.get(url, this.getHeader());
  }

  userUpdate(id:string, data:any) {
    const url = `${environment.apiUrl}/user/update/${id}`;
    return this.http.post(url, data, this.getHeader());
  }

  getHeader() {
    let user = JSON.parse(localStorage.getItem('user'));

    let headers = new HttpHeaders(
      {
        'Authorization': `Bearer ${user.token}`
      }
    );

    let options = { headers: headers };

    return options;
  }
}
