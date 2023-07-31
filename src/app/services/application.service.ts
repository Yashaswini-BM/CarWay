import { Injectable } from '@angular/core';
import { Application } from '../application.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicationService {
  public static baseUrl:string="http://localhost:3000";
  constructor(private http:HttpClient) { }

  persist(apply:Application){
    this.http.post(ApplicationService.baseUrl+"/application",apply).subscribe(data=>data=apply);
  }
  list(){
    return this.http.get<Application[]>(ApplicationService.baseUrl+"/application");
  }
}
