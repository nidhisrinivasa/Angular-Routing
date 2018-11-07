import { Component } from '@angular/core';
import {Router} from '@angular/router';

@Component({
  selector: 'prod-comp',
  template: `<h2>Product Component</h2>
                <table class="table" border="3" width="50%">
                <thead class="thead-dark">
                  <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Name</th>
                  </tr>
                </thead>
                <tr *ngFor="let p of products" border="3" (click)="onSelectId(p)">
                    <td>{{p.id}}</td>
                    <td>{{p.name}}</td>
                </tr>
                </table>`,
  styles: []
})
export class Product {
    products = [
        {"id": 11, "name": "Golden Deer"},
        {"id": 22, "name": "Chariot"},
        {"id": 33, "name": "Throne"},
        {"id": 44, "name": "Forbidden forest"},
        {"id": 55, "name": "Bow and Arrow"},
   ];
   constructor(private router: Router){

   }
   onSelectId(p){
       this.router.navigate(['/product', p.id, p.name])
   }
}
