import { Component, OnInit } from '@angular/core';
import { ClientsService } from '../clients.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-show',
  templateUrl: './client-show.component.html',
  styleUrls: ['./client-show.component.css']
})
export class ClientShowComponent implements OnInit {

  id:string;
  client:any = [];

  constructor(
    private clientService: ClientsService,
    private activateRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.activateRoute.paramMap.subscribe(params => {
      this.id = params.get('id');
      this.clientService.getClientById(this.id).subscribe(data => {
        this.client = data['data'];
      })
    })
  }
}
