import { Component } from '@angular/core';
import { Login } from '../login.model';
import { LoginService } from '../services/login.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  cred : Login = new Login();
  flag : boolean = false;
  msg : string = "";
  
  constructor(private service : LoginService, private router : Router){
    localStorage.clear();
   }

  authenticate() {
    this.flag = this.service.validate(this.cred);
    
    if(this.flag){
    localStorage.setItem("Name", this.cred.username);
    localStorage.setItem("Role", this.cred.password);
    this.router.navigate(['/userlist']);
  } else
  this.msg = "Invalid Username/Password";
}
  

}
