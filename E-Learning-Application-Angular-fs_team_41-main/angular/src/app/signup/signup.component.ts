import { Component, OnInit } from '@angular/core';
import { TestService } from '../test.service';
import { User } from '../User';
import { Router } from '@angular/router';
@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  message:any;
  public userName:string='';
 public userEmail:string='';
 public mobileNumber:string='';
 public password:string='';
 public confirmPassword:string='';  
   
   constructor(private svc:TestService,private router:Router) { 
   }
   user:User=new User(this.userName,this.userEmail,this.mobileNumber,this.password,this.confirmPassword);
  //user !: User;
 // user =new User();
   ngOnInit(): void {
     
 
 
   }
   public signIn(){
     console.log(this.user);
     console.log(this.userEmail);
     let resp=this.svc.doRegistration(this.user);
    // console.log(resp);
     resp.subscribe((data)=>this.message=data);
   }
 public goTo():void{
   this.router.navigate(['login']);
 }
}
