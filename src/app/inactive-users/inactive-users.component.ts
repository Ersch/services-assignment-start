import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {UsersService} from '../users.service';
import {CounterService} from '../counter.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css'],
})
export class InactiveUsersComponent implements OnInit {
  users: string[];

  constructor(private usersService: UsersService, private countService: CounterService) {
  }

  onSetToActive(id: number) {
    this.usersService.onSetToActive(id);
    this.countService.count();
  }

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers;
    this.countService.count();
  }

  getNumberOfInactiveUsers(): number{
    return this.countService.inactiveUsers;
  }
}
