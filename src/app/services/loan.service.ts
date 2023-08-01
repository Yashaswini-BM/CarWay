import { Injectable } from '@angular/core';
import { UserDetails } from '../userlist.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoanService {
  user:UserDetails[]=[];
  private static baseUrl:string="http://localhost:3000";
  constructor(private http:HttpClient) {
    this.http.get<UserDetails[]>(LoanService.baseUrl+"/list/").subscribe(data=>this.user=data);
  }
  list(){
    return this.http.get<UserDetails[]>(LoanService.baseUrl+"/list");
   }
}
