import { Component } from '@angular/core';

@Component({
  selector: 'app-server',
  templateUrl: './server.component.html',
  styles: [`
    .online {
      color: white;
    }
  `]
})
export class ServerComponent {
  serverId = 10;
  serverStatus = 'offline';
  userName = '';

  constructor() {
    this.serverStatus = Math.random() > 0.5 ? 'online' : 'offline';
  }

  getServerStatus() {
    return this.serverStatus;
  }

  isUserNameEmpty() {
    if (this.userName.length === 0) {
      return true;
    }
    return false;
  }

  resetUserName() {
    this.userName = '';
  }

  getColor() {
    return this.serverStatus === 'online' ? 'green' : 'red';
  }
}
