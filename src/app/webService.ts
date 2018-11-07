import { Http, Response} from '@angular/http';
import {Injectable} from '@angular/core';
import 'rxjs/add/operator/map';

@Injectable()
export class webService {
   //private url: string="https://jsonplaceholder.typicode.com/posts";
   private url: string="assets/myData.json";
   constructor(private http:Http){}
   getWebDetails(){
       return this.http.get(this.url).map(function(response:Response){
          return response.json()
    });
   }
}
