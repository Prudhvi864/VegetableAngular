import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Vegetable } from './vegetable';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';


@Injectable()
export class VegetableService {

  //private _url: string = "/assets/data/employees.json";

  constructor(private http:HttpClient) { }
  addFeedback(veg:Vegetable):Observable<Vegetable[]>{
    alert(JSON.stringify(veg));
    return this.http.post<Vegetable[]>(`http://localhost:8990/RestVegetables/rest/feedback/addfeedback`,veg);
  }

  getFeeds(): Observable<Vegetable[]>{
    return this.http.get<Vegetable[]>("http://localhost:8990/RestVegetables/rest/feedback/viewAll");
  }
  getfeedbackByCId(feed1: any): Observable<Object> {
    alert(feed1);
    return this.http.get(`http://localhost:8990/RestVegetables/rest/feedback/custfeed/${feed1}`);
  }
  getFeedbackByVId(feed2: any): Observable<Object> {
    alert(feed2);
    return this.http.get(`http://localhost:8990/RestVegetables/rest/feedback/feeds/${feed2}`);
  }
  getRating(rate:any): Observable<Object>{
    alert(rate);
    return this.http.get(`http://localhost:8990/RestVegetables/rest/feedback/ratefeed/${rate}`);
  }

}
