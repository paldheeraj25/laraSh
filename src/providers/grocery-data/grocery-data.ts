import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/observable';

/*
  Generated class for the GroceryDataProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GroceryDataProvider {

  public url: string = 'http://45.33.34.17/api/grocery/';
  constructor(public http: HttpClient) {
    console.log('Hello GroceryDataProvider Provider');
  }

  getGroceryOrders(date): Observable<any> {
    return this.http.get(this.url + date);
  }

  updateDelivery(id): Observable<any> {
    return this.http.get(this.url + "delivered/" + id);
  }
}
