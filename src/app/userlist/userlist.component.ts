import { Component } from '@angular/core';
import { LoanService } from '../services/loan.service';
import { UserDetails } from '../userlist.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent {
  user:UserDetails[]=[];
  constructor(private service:LoanService,private router:Router){}
  ngOnInit():void{
    this.service.list().subscribe(data=>this.user=data);
  }
}
