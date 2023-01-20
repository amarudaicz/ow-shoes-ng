import { Injectable } from '@angular/core';
import { LocalStorageService } from '../localStorage/local-storage-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private storage:LocalStorageService) { }
 
  public data?:{name:string, role:string} = this.storage.getItem('user')

}
