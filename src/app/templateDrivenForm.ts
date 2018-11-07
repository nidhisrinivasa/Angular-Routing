import { Component } from '@angular/core';

@Component({
  selector: 'temp-form',
  template: `<h2>Template Driven Form</h2>
            <form #myForm="ngForm" (ngSubmit)="onSubmit(myForm.value)">
                Name: <input type="text" name="name" ngModel><br>
                Age: <input type="text" name="age" ngModel><br>
                Email: <input type="email" name="email" ngModel><br>
                <button type ="submit">Submit</button>
            </form>`,
  styles: []
})
export class TemplateDrivenForm {
    onSubmit(value:any){
        console.log(value);
    }
}
