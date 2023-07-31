import { Component } from '@angular/core';
import { Avail } from '../avail.model';
import { AvailService } from '../services/avail.service';
import { Router } from '@angular/router';
import { EmiService } from '../services/emi.service';
@Component({
  selector: 'app-avail',
  templateUrl: './avail.component.html',
  styleUrls: ['./avail.component.css']
})
export class AvailComponent {
  principalLoanAmount: number=0;
  annualInterestRate: number=11.25;
  loanTermInYears: number=0;
  avail : Avail = new Avail();
  flag : boolean = true;

  constructor(private service : AvailService ,private router : Router,private emiCalculator: EmiService){
    localStorage.clear();
   }
 
   check() {
    this.flag = this.service.validate(this.avail);
   }
   
  authenticate() {
    if(this.flag){
    if(this.avail.income * 0.25 > this.avail.emi)
      this.router.navigate(["/application"]);
    } 
    // else
    // alert("Monthly income is less. Would you like to choose a pre-owned car?");
    // this.router.navigate(['/ownedcar'])
  }

  calculateEMI() {
  this.avail.emi = this.emiCalculator.calculateEMI(
    this.principalLoanAmount,
    this.annualInterestRate,
    this.loanTermInYears
  );
  }
}
