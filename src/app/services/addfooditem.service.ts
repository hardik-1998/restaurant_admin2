import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Fooditem } from '../food-items/fooditem';
const httpOptions={
  headers: new HttpHeaders({'Content-Type': 'application/json'})
}

@Injectable({
  providedIn: 'root'
})
export class AddfooditemService {
  constructor(private http:HttpClient) { }

  getfooditemsdb(): Observable <any>{
    return this.http.get('/server/api/fooditem/fooditems');
  }

  getfooditemdb(id: number): Observable <any>{
    return this.http.get('/server/api/fooditem/find/'+ id)
  }

  addfooditemdb(formData:FormData): Observable <any>{
    return this.http.post('/server/api/fooditem/add', formData);
 }
}
