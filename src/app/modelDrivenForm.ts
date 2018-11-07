import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'model-form',
  template: `<h2>Model Driven Form</h2>
            <form [formGroup] = "studentForm" (ngSubmit)="onSubmit()" [ngStyle]="{'margin-left': '20px'}">
                <div class="form-row">
                    <div class="form-group col-md-6" [ngStyle]="{'width': '280px'}">
                    <label>Roll</label>
                        <input class="form-control" type ="text" formControlName="roll">
                        <div *ngIf="studentForm.controls['roll'].hasError('required')">
                            <span [ngStyle]="{'color':'red'}">This field is required</span>
                        </div>
                        <div *ngIf="studentForm.controls['roll'].hasError('minLength')">
                            <span [ngStyle]="{'color':'red'}">Please enter min 4 Characters</span>
                        </div>
                        <div *ngIf="studentForm.controls['roll'].hasError('maxLength')">
                            <span [ngStyle]="{'color':'red'}">Please enter max 6 Characters</span>
                        </div>
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6" [ngStyle]="{'width': '280px'}">
                    <label>Name</label>
                        <input class="form-control" type ="text" formControlName="name">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6" [ngStyle]="{'width': '280px'}">
                    <label>Age</label>
                        <input class="form-control" type ="text" formControlName="age">
                    </div>
                </div>
                <div class="form-row">
                    <div class="form-group col-md-6" formGroupName="address" [ngStyle]="{'width': '280px'}">
                    <label>City</label>
                        <input class="form-control" type ="text" formControlName="city">
                    </div>
                    <div class="form-group col-md-2" formGroupName="address" [ngStyle]="{'width': '280px'}">
                    <label>PinCode</label>
                        <input class="form-control" type ="text" formControlName="pin">
                    </div>
                </div>
                <button class="btn btn-primary" type ="submit" [disabled]="!studentForm.valid">Submit</button>
            </form>`,
  styles: []
})
export class ModelDrivenForm {
    studentForm = new FormGroup({
        roll: new FormControl('', [Validators.required, Validators.minLength(4), Validators.maxLength(6)]),
        name: new FormControl(),
        age: new FormControl(),
        address: new FormGroup({
            city: new FormControl(),
            pin: new FormControl()
        })
    });
    onSubmit(){
        console.log(this.studentForm.value); 
    }
}
