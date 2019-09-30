import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  constructor(private http: HttpClient) { }



getDetails(): Observable<any> {
  return this.http.get<any>('https://developers.zomato.com/api/v2.1/collections?city_id=4',
   {headers: new HttpHeaders().set('user-key', '2811cf121111780b93f7d49524ee04a4')});
}
}
