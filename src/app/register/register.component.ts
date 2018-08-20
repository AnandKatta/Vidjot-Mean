import { Component, OnInit } from '@angular/core';
import {Iusers} from "../Interfaces/Iusers";
import {UsersService} from "../users.service";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
public name:string;
public email:string;
public password:string;
public cpassword:string;
  constructor(private usersService:UsersService) { }

  ngOnInit() 
  {
  }

  onSubmitForm()
  {
     let obj=<Iusers>{};
     obj.name=this.name;
     obj.password=this.password;
     obj.email=this.email;
     this.usersService.PostUserData(obj).subscribe(data=>
    {
        
    });
     
  }

}
