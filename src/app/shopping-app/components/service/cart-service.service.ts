import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CartServiceService {
  cartItemList: any = [];
  productList = new BehaviorSubject<any>([]);
  search = new BehaviorSubject<string>('');
  constructor() { }

  getProducts() {
    return this.productList.asObservable()
  }

  // addtoCart(product: any) {
  //   this.cartItemList.push(product);
  //   this.productList.next(this.cartItemList);
  //   this.getTotalPrice();
  //   console.log(this.cartItemList)
  // }

  addtoCart(product: any) {
    const existingItem = this.cartItemList.find((item: any) => item.id === product.id)

    if(existingItem) {
      existingItem.quantity += 1;
      existingItem.total = existingItem.price * existingItem.quantity;
    } else {
      product.quantity = 1;
      this.cartItemList.push(product);
    }
    
    this.productList.next(this.cartItemList)

    this.getTotalPrice()
  }

  getTotalPrice(): number {
    let grandTotal = 0;
    this.cartItemList.map((a: any) => {
      grandTotal += a.total ;
    })
    return grandTotal;
  }

  removeCartItem(product: any) {
    this.cartItemList.map((a: any, index: any) => {
      if (product.id === a.id) {
        this.cartItemList.splice(index, 1);
      };
    })
    this.productList.next(this.cartItemList)
  }

  clearCart() {
    this.cartItemList = [];
    this.productList.next(this.cartItemList)
  }
}
