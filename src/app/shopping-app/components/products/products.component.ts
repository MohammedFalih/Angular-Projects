import { Component, OnInit } from '@angular/core';
import { ApiService } from '../service/api.service';
import { CartServiceService } from '../service/cart-service.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit {
  productList: any;
  filterCategory: any;
  searchKey: string = '';
  constructor(private product: ApiService, private cart: CartServiceService) { }

  ngOnInit(): void {
    this.product.getProduct()
      .subscribe(res => {
        this.productList = res;
        this.filterCategory = res;
        this.productList.forEach((a: any) => {
          Object.assign(a, { quantity: 1, total: a.price })
        });
      })

    this.cart.search.subscribe(value => {
      this.searchKey = value;
    })
  }

  addtoCart(product: any) {
    this.cart.addtoCart(product)
  }
}
