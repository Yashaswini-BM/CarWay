import { Component } from '@angular/core';
import { Application } from '../application.model';
import { ApplicationService } from '../services/application.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-application',
  templateUrl: './application.component.html',
  styleUrls: ['./application.component.css']
})
export class ApplicationComponent {
  apply:Application=new Application();

  constructor(private service:ApplicationService,private router:Router){}

  save(){
    this.service.persist(this.apply);
    this.router.navigate(["/upload"]);
  }
}