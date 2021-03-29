import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TestService {

  constructor(private http : HttpClient) { }
 public doRegistration(user:any){
  //const body=JSON.stringify(user);
 // console.log(body);

 return this.http.post('http://localhost:8080/register',user,{responseType : 'text' as 'json'});
 }
}
