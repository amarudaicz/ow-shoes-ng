import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class restService {

  constructor(private http: HttpClient) { }


  public get(url:string){
    return this.http.get(url)
  }

  public post(url:string, body:object){
    return this.http.post(url, body)
  }




}
