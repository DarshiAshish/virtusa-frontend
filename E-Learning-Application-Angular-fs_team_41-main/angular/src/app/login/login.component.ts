import { UserLogin } from './../../UserLogin';
import { TestService } from './../test.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public loginEmail:string='';
message:string='';
public loginPassword:string='';
  constructor(private svc:TestService) { }
  user:UserLogin=new UserLogin(this.loginEmail,this.loginPassword);
  ngOnInit(): void {
  }
  public logIn(){
    this.svc.logInto(this.user)
    .subscribe(
    data=>{console.log("response received")   },
    error=>{
      console.log("ecxeption occured");
      this.message="Bad credentials";
    }
    )
  }

}
