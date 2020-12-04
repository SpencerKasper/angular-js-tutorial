import {Component, Input, OnChanges, OnInit, SimpleChanges} from '@angular/core';

@Component({
  selector: 'app-customer-table',
  templateUrl: './customer-table.component.html',
  styleUrls: ['./customer-table.component.scss']
})
export class CustomerTableComponent implements OnChanges, OnInit {
  @Input() quantity: number | string;

  constructor() {
    this.quantity = 7;
    console.log('quantity in constructor: ', this.quantity);
  }

  ngOnInit(): void {
    this.quantity = 8;
    console.log('quantity in onInit: ', this.quantity);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.quantity = 9;
    console.log('quantity in onChanges: ', this.quantity);
  }

}
