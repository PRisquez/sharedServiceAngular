import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  identity = new BehaviorSubject(null);
  currentIdentity = this.identity.asObservable();

  constructor() { }

  public loadIdentity(identity: any){
    this.identity.next(identity);
  }

  login(){
    return new User("El","pedrorisquez@hotmail.com","pedro","goto5");
  }
}
