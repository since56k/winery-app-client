import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

	@Input() public id: number;
  @Input() public name: string;
  @Input() public price: number = 5;
  @Input() public currency: string;

  public getCurrency(): string {
    return 'EUR';
  }

  constructor() { }

  ngOnInit() {
  }

}
