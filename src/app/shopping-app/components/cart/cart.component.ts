import { Component, OnInit } from '@angular/core';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.css',
})
export class CartComponent implements OnInit {
  cartItems: any;
  grandTotal!: number;
  constructor(private cart: CartServiceService) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res => {
      this.cartItems = res;
      this.grandTotal = this.cart.getTotalPrice();
    })
  }

  removeItem(item: any) {
    this.cart.removeCartItem(item);
    this.calculateGrandTotal();
  }

  clearCart() {
    this.cart.clearCart()
  }

  quantityRange(): number[] {
    return Array.from({ length: 4 }, (_, index) => index + 1);
  }
  
  onQuantityChange(): void {
    this.calculateGrandTotal();
  }

  calculateGrandTotal(): void {
    this.grandTotal = this.cartItems.reduce((total: number, item: any) => {
      return total + (item.price * item.quantity);
    }, 0);
  }
}
