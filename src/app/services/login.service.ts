import { Injectable } from '@angular/core';
import { Login } from '../login.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  credentials :Login[]=[];
  private static baseUrl : string="http://localhost:5000";

  constructor(private http:HttpClient) {
    this.http.get<Login[]>(LoginService.baseUrl + "/credentials/").subscribe(data => this.credentials = data)
  }

  persist(credentials : Login){
    this.http.post(LoginService.baseUrl+"/credentials/", this.credentials).subscribe(data=>data=this.credentials)
  }

  validate(cred : Login):boolean{
    for(let i=0 ; i<this.credentials.length; i++){
      if(cred.username==this.credentials[i].username && cred.password ==this.credentials[i].password)
          return true;
        }
      return false;
  }

}
