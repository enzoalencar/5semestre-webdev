import { Component } from '@angular/core';
import { User } from '../../models/user';


@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  userList: User[] = []

  constructor() {
    this.userList = [
      {name: 'Enzo Murat', email: 'enzo@email.com', funcao: 'lider-tecnico'},
      {name: 'Pedro Andrade', email: 'pedro@email.com', funcao: 'engenehiro-fe'},
      {name: 'Kaike', email: 'kaike@email.com', funcao: 'engenehiro-be'},
    ]
  }

  removeUser(index: number): void {
    this.userList.splice(index, 1);
}
}
