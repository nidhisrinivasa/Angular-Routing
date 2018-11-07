import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { Customer } from './customer';
import { Product } from './product';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
