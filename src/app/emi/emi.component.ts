import { Component} from '@angular/core';
import { EmiService } from '../services/emi.service';

@Component({
  selector: 'app-emi',
  templateUrl: './emi.component.html',
  styleUrls: ['./emi.component.css']
})
export class EmiComponent {
  principalLoanAmount: number=0;
  annualInterestRate: number=0;
  loanTermInYears: number=0;
  emi: number=0;

  constructor(private emiCalculator: EmiService) {}

  calculateEMI() {
    this.emi = this.emiCalculator.calculateEMI(
      this.principalLoanAmount,
      this.annualInterestRate,
      this.loanTermInYears
    );
  }

}
