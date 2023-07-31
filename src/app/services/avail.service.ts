import { Injectable } from '@angular/core';
import { Avail } from '../avail.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AvailService {
  avails : Avail[] = [];

  private static baseURl : string = "http://localhost:3000";

  constructor(private http : HttpClient) { 
    this.http.get<Avail[]>("../assets/avails.json").subscribe(data => this.avails = data);
  }

  persist(avail : Avail){
    this.http.post(AvailService.baseURl + "/avail" , avail).subscribe(data => data = avail);
  }

  list() {
    return this.http.get<Avail[]>(AvailService.baseURl + "/avail");
  }

  validate(avail : Avail):boolean{
      if((avail.income * 0.25) > avail.emi)
          return true;
          else{
            return false;
          }
  }
}
