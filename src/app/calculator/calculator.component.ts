import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  op1: number;
  op2: number;
  resul:number;

  constructor() { }

  ngOnInit(): void {
  }

  suma()
  {
    this.resul = (this.op1 + this.op2);
  }

  resta()
  {
    this.resul = (this.op1 - this.op2);
  }

  multiplicacion()
  {
    this.resul = (this.op1 * this.op2);
  }

  division()
  {
    this.resul = (this.op1 / this.op2);
  }

}




