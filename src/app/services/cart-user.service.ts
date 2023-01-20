import { Injectable } from '@angular/core';
import { ItemCartStorage } from '../interfaces/itemCartStorage.interface';
import { LocalStorageService } from './localStorage/local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class CartUserService {

  constructor(private storage:LocalStorageService) { }

  cartState:boolean = false


  


}
