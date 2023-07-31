import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EmiService {
  calculateEMI(principal: number, interestRate: number, loanTerm: number): number {
    const monthlyInterestRate = interestRate / (12 * 100);
    const numberOfMonths = loanTerm * 12;

    const emi =
      (principal * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfMonths)) /
      (Math.pow(1 + monthlyInterestRate, numberOfMonths) - 1);
    return emi;
  }

  constructor() { }
}
