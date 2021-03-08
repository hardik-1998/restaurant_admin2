import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AddfooditemService {

  constructor(private http:HttpClient) { }

  addfooditemdb(fooditem){
    let body=JSON.stringify(fooditem);
    return this.http.post('/server/api/fooditem/add', body, httpOptions);
 }
}
