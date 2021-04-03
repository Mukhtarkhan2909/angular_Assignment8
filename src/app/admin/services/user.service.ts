import { Injectable } from '@angular/core';
import { UserDetails, users } from './userDetais';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor() { }

  user = users;

  getUser(): UserDetails[] {
    return this.user;
  }
}
