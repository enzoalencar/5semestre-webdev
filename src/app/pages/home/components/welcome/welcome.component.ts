import { Component } from '@angular/core';
import { User } from '../../models/user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})

export class WelcomeComponent {
  users: User[] = [];
  roleList = [
    'engenheiro-fe',
    'engenheiro-be',
    'analista-de-dados',
    'lider-tecnico'
  ];

  getUsersByRole(role: string): User[] {
    return this.users.filter(user => user.funcao === role.toLowerCase().replace(' ', '-'));
  }

  getLenOfUsers(): number {
    return this.users.length;
  }

  constructor() {
    this.users = [
      {name: 'cledison', email: 'cledison@email.com', funcao: 'analista-de-dados'},
      {name: 'Matheus', email: 'matheus@email', funcao: 'lider-tecnico'},
      {name: 'Vinicius', email: 'vinicius@email.com', funcao: 'engenheiro-fe'},
      {name: 'Luan', email: 'luan@email.com', funcao: 'engenheiro-be'},
    ]
  }
}
