import {Injectable} from '@angular/core';
import {UsersService} from './users.service';

@Injectable({
  providedIn: 'root'
})
export class CounterService {
  activeUsers: number;
  inactiveUsers: number;

  constructor(private usersService: UsersService) {
  }

 count(){
    this.activeUsers = this.usersService.activeUsers.length;
    this.inactiveUsers = this.usersService.inactiveUsers.length;
 }


}
