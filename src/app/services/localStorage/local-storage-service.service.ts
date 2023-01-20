import { Injectable } from '@angular/core';
import { ItemCartStorage } from '../../interfaces/itemCartStorage.interface'

interface Items{
  name:string
  value:string
}

@Injectable({
  providedIn: 'root'
})


export class LocalStorageService{

  constructor() { }

  cart:ItemCartStorage[] = this.getItem('cart_user')

  
  getItem(item:string){
    const property:any = localStorage.getItem(item)
    return JSON.parse(property) 
  }


  setItem(name:string, item:any){
    const itemParsed = JSON.stringify(item)
    localStorage.setItem(name, itemParsed)
  }

  setMoreItems(items:Items[]){
    items.forEach(item =>{
      const parsed = JSON.stringify(item.value)
      localStorage.setItem(item.name, parsed)
    })

  }

  clearStorage(){
    localStorage.clear()
  }


}
