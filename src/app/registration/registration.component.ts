import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user:User;
  public view:string;

  constructor() { 
    this.home();
  }

  ngOnInit() {
  }

  doRegister(){
    this.view = "confirmation";
  }

  home(){
    this.user = new User(0,"","","","");
    this.view = "form";
  }

}
