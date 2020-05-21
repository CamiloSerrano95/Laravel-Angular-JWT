import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ClientsService {

  data:any;

  constructor(
    private http: HttpClient
  ) { }

  getAllClients() {
    const url = `${environment.apiUrl}/client/all`
    return this.http.get(url, this.getHeader());
  }

  getClientById(id:string) {
    const url = `${environment.apiUrl}/client/getById/${id}`
    return this.http.get(url, this.getHeader());
  }

  newClient(data:any) {
    const url = `${environment.apiUrl}/client/store`;
    return this.http.post(url, data, this.getHeader());
  }

  clientUpdate(id:string, data:any) {
    const url = `${environment.apiUrl}/client/update/${id}`;
    return this.http.post(url, data, this.getHeader());
  }

  clientDelete(id:string) {
    const url = `${environment.apiUrl}/client/delete/${id}`;
    return this.http.get(url, this.getHeader());
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
