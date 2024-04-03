import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css'
})
export class CartComponent implements OnInit {
  cartItems: any;
  constructor(private cart: ApiService) { }

  ngOnInit(): void {
    this.cart.getProduct().subscribe(res => {
      this.cartItems = res;
    })
  }
}
