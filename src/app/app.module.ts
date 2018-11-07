import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Animation } from './animation';
import { Customer } from './customer';
import { Product } from './product';
import { RouterModule } from '@angular/router';
import { ProductDetails } from './productDetails';
import { NewCustomer } from './newCustomer';
import { OldCustomer } from './oldCustomer';
import { TemplateDrivenForm } from './templateDrivenForm';
import { ModelDrivenForm } from './modelDrivenForm';
import { HttpFile } from './httpFile';
import{ HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule} from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    AppComponent,
    Customer,
    Product,
    NewCustomer,
    OldCustomer,
    ProductDetails,
    TemplateDrivenForm,
    ModelDrivenForm,
    HttpFile,
    Animation
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([{
      path:'customer', component:Customer, children: [{
        path:'newCustomer', component:NewCustomer
      },{
        path:'oldCustomer', component:OldCustomer
      }]
    },{
      path:'product', component:Product
    },{
      path:'product/:id/:name', component: ProductDetails
    },{
      path:'template', component: TemplateDrivenForm
    },{
      path:'modelform', component: ModelDrivenForm
    },{
      path:'httpfile', component: HttpFile
    },{
      path:'animation', component: Animation
    }
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
