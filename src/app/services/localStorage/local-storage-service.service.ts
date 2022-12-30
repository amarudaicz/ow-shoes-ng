import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService{

  constructor() { }


  getItem(item:string){

    const cart:any = localStorage.getItem(item)
    const cartParsed:any = JSON.parse(cart)

    return cartParsed

  }
}
