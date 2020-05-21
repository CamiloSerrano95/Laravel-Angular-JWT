import { Component, OnInit } from '@angular/core';
import { ClientsService } from './clients.service';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.css']
})
export class ClientComponent implements OnInit {

  clients:any;
  message:string;

  constructor(
    private clientService: ClientsService
  ) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.clientService.getAllClients().subscribe(data => {
      this.clients = data['data'];
    });
  }

  delete(id:string) {
    this.clientService.clientDelete(id).subscribe(data => {
      this.getAll();
      this.message = data['msg'];
    })
  }
}