import { Component } from '@angular/core';
import { ApplicationService } from '../services/application.service';
import { Application } from '../application.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-viewloan',
  templateUrl: './viewloan.component.html',
  styleUrls: ['./viewloan.component.css']
})
export class ViewloanComponent {
  user:Application=new Application();
  view:Application[]=[];
  constructor(private service:ApplicationService,private router:Router){}
  ngOnInit():void{
    this.service.list().subscribe(data=>this.view=data);
  }  

}
