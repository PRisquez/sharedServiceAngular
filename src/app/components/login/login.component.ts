import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public identity: any;

  constructor(
    private _userService : UserService
  ) { }

  ngOnInit(): void {
  }

  login(){
    let userLogged = this._userService.login();
    this.identity = userLogged;
    this._userService.loadIdentity(this.identity);


  }

  logout(){
    this.identity = null;
    this._userService.loadIdentity(null);
  }

}
