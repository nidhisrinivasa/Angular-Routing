import { Component } from '@angular/core';

@Component({
  selector: 'cust-comp',
  template: `<h2>Customer Component</h2>
                <table class="table" border="3">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                  </tr>
                </thead>
                <tbody>
                <tr *ngFor="let c of customers">
                  <td>{{c.id}}</td>
                  <td>{{c.name}}</td>
                </tr>
                </tbody>
                </table><br><br>
                <nav class="nav">
                  <a class="nav-link" [routerLink]="['newCustomer']">New Customer</a>
                  <a class="nav-link" [routerLink]="['oldCustomer']">Old Customer</a>
                </nav>
                <button type="button" class="btn btn-outline-success" data-toggle="tooltip" data-placement="top" title="Tooltip on top">Ok</button>
                <router-outlet></router-outlet>`,
  styles: []
})
export class Customer {
  customers = [
       {"id": 1, "name": "Bharat"},
       {"id": 2, "name": "Sita"},
       {"id": 3, "name": "Ram"},
       {"id": 4, "name": "Ravan"},
       {"id": 5, "name": "Hanuman"},
  ]
}
