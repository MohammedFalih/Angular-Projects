import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent implements OnInit {
  categoryList: any;
  productList: any;
  cartItems!: number;
  searchTerm: string = ''

  constructor(
    private router: Router,
    private cart: CartServiceService,
  ) { }

  ngOnInit(): void {
    this.cart.getProducts().subscribe(res => {
      this.cartItems = res.length;
    })
  }

  search(event: any) {
    this.searchTerm = (event.target as HTMLInputElement).value;
    // console.log(this.searchTerm)
    this.cart.search.next(this.searchTerm);
  }

  navigatetoCart() {
    this.router.navigate(['cart'])
  }
}
