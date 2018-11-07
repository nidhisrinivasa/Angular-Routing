import {Component} from '@angular/core';
import {webService} from './webService';

@Component({
    template: `<h2>Web REST API Data</h2>
                <table border="3">
                <thead>
                <tr>
                    <th scope="col">Id</th>
                    <th scope="col">Title</th>
                </tr>
                </thead>
                <tr *ngFor="let w of webDetails" border="3">
                    <td>{{w.id}}</td>
                    <td>{{w.title}}</td>
                </tr>
                </table>`,
    providers: [webService]
})
export class HttpFile {
    webDetails =[];
    constructor(private webser:webService){}
    ngOnInit(){
        this.webser.getWebDetails().subscribe(resdata => this.webDetails=resdata);
    }
}
