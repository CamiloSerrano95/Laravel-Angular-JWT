import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ClientsService } from '../clients.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-client-manager',
  templateUrl: './client-manager.component.html',
  styleUrls: ['./client-manager.component.css']
})
export class ClientManagerComponent implements OnInit {

  clientForm: FormGroup;
  editMode = false;
  id:string;
  msg:string;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private clientService: ClientsService
  ) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.id = params.id;
      if (this.id) {
        this.editMode = true;
        this.fillForm();
      }
    });
    this.initForm();
  }

  onSubmit() {
    if (this.id) {
      this.clientService.clientUpdate(this.id, this.clientForm.value).subscribe(data => {
        this.msg = data['msg'];
        setTimeout(() => {
          this.editMode = false;
          this.onCancel();
        }, 3000);
        
      })
    } else {
      this.clientService.newClient(this.clientForm.value).subscribe(data => {
        this.msg = data['msg'];
        setTimeout(() => {
          this.router.navigate(['/client']);
        }, 3000);
      })
    }
  }

  private initForm() {
    this.clientForm = new FormGroup({
      'names' : new FormControl('', Validators.required),
      'identification' : new FormControl('', Validators.required),
      'telephone' : new FormControl('', Validators.required),
      'address' : new FormControl('', Validators.required),
      'email' : new FormControl('', Validators.required)
    });
  }

  private fillForm() {
    this.clientService.getClientById(this.id).subscribe(data => {
      this.clientForm = new FormGroup({
        'names' : new FormControl(data['data'].names, Validators.required),
        'identification' : new FormControl(data['data'].identification, Validators.required),
        'telephone' : new FormControl(data['data'].telephone, Validators.required),
        'address' : new FormControl(data['data'].address, Validators.required),
        'email' : new FormControl(data['data'].email, Validators.required)
      });
    }) 
  }

  onCancel() {
    this.router.navigate(['/client']);
  }
}
