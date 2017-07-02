import { Injectable } from '@angular/core';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

const URL = 'http://localhost:3000/api/';

@Injectable()
export class NavcoinService {
  // constructor (private http: Http) {}
  // loadItems() {
  //   return this.http.get(URL)
  //     .map(res => res.json())
  //     .toPromise();
  // }
}
