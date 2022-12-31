import { Injectable } from '@angular/core';
import { ItemCartStorage } from '../../interfaces/itemCartStorage.interface'

@Injectable({
  providedIn: 'root'
})
export class LocalStorageService{

  constructor() { }

  cart:ItemCartStorage[] = []

  getItem(item:string){

    const cart:any = localStorage.getItem(item)
    const cartParsed:any = JSON.parse(cart)

    return cartParsed

  }



}
