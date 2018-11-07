import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Router} from '@angular/router';

@Component({
  selector: 'prod-details',
  template: `<h2>Product Details</h2>
  <h3>You Selected name {{p_name}} And Id {{p_id}}</h3>
  <button type="button" class="btn btn-outline-success" data-toggle="tooltip" data-placement="top" title="Tooltip on top" (click)="goBack()">Back</button>`,
  styles: []
})
export class ProductDetails {
    public p_id;
    public p_name;
    constructor(private route: ActivatedRoute, private router: Router){

    }
    ngOnInit(){
      let id = this.route.snapshot.params['id'];
      this.p_id=id;
      let name = this.route.snapshot.params['name'];
      this.p_name=name;
    }
    goBack(){
      this.router.navigate(['/product']); 
    }
}
