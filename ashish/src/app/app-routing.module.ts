import { LoginComponent } from './login/login.component';
import { SigninComponent } from './signin/signin.component';
import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
   { path:'',redirectTo:'register',pathMatch:'full'},
  { path: 'register', component:SigninComponent
},
  { path: 'login', component:LoginComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
