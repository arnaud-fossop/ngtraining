import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-authentication',
  templateUrl: './authentication.component.html',
  styleUrls: ['./authentication.component.css']
})
export class AuthenticationComponent implements OnInit {
  username = '';

  constructor() { }

  ngOnInit() {
  }

  getUsername() {
    if (this.isUsernameEmpty()) {
      return "not defined";
    }
    else {
      return this.username;
    }
  }

  isUsernameEmpty() {
    return (!(this.username)) || (this.username === '');
  }

  onResetUsername() {
    this.username = '';
  }
}
