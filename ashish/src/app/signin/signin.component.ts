import { Router } from '@angular/router';
import { TestService } from '../test.service';
import { Component, OnInit  } from '@angular/core';
import { User } from '../User';

@Component({
  selector: 'app-signin',
  templateUrl: './signin.component.html',
  styleUrls: ['./signin.component.css']
})
export class SigninComponent implements OnInit {
 message:any;
 public userName:string='';
public userEmail:string='';
public mobileNumber:string='';
public password:string='';
public confirmPassword:string='';  
  
  constructor(private svc:TestService,private router:Router) { 
//  this.userName='';
//     this.userEmail='';
//     this.mobileNumber='';
//     this.password='';
//     this.confirmPassword='';
  }
  user:User=new User(this.userName,this.userEmail,this.mobileNumber,this.password,this.confirmPassword);
  ngOnInit(): void {
    


  }
  public signIn(){
    //console.log(this.user);
    
    let resp=this.svc.doRegistration(this.user);
   // console.log(resp);
    resp.subscribe((data)=>this.message=data);
  }
public goTo():void{
  this.router.navigate(['login']);
}
 
}

