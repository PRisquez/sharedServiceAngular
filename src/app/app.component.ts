import { Component, OnInit } from '@angular/core';
import { UserService } from './services/user.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'client';
  public identity: any;
  public token: any;

  constructor(
    private _userService: UserService
  ){ }

  ngOnInit() {
    this._userService.currentIdentity.subscribe(
      (response)=>{
        this.identity=response;
        console.log(this.identity);
      }
    );
  }
}
