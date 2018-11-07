import {Component} from '@angular/core';
import {trigger,state,style,transition,animate} from '@angular/animations';

@Component({
    template: `<h2>Animation</h2>
                <button (click)="ontoggle()">ToogleColor</button>
                <div class="divsec" [@changecolor]="divState">Hello</div>`,
    styles: [`
        .divsec{
            margin: 10px;
            height: 200px;
            width: 200px;
            color: white;
            background-color: blue;
        }`
    ],
    animations: [
        trigger('changecolor',[
            state('off', style({
                backgroundColor:'black',
                color: 'pink',
                width: '40px',
                height: '25px'
            })),
            state('on', style({
                backgroundColor:'pink',
                color: 'black',
                width: '200px',
                height: '200px'
            })),
            transition('off=>on',animate('2s')),
            transition('on=>off',animate('2s'))
        ])
    ]
})
export class Animation {
    divState:string="off";
    ontoggle(){
        this.divState=(this.divState==="off")?"on":"off";
    }
}
