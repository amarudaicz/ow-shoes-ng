import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'

@Injectable({
  providedIn: 'root'
})
export class CloudinaryService {

constructor(private http:HttpClient) { }

  upload(data:any){

    return this.http.post(
      'https://api.cloudinary.com/v1_1/diyorb8ka/upload', 
      data
    )
    
  }





}
