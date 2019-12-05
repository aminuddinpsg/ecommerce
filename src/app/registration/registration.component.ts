import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {

  public user:User;
  public view:string;
  private userService:UserService;

  constructor(userService:UserService) {
    this.userService = userService; 
    this.home();
  }

  ngOnInit() {
  }

  doRegister(){
    this.userService.save(this.user).subscribe((user:User) => {
      this.user = user;
      this.view = "confirmation";
    });
  }

  home(){
    this.user = new User(0,"","","","");
    this.view = "form";
  }

}
