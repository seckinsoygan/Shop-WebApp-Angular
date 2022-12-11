import { Component } from '@angular/core';
import { Product } from './product';
declare let alertify: any;

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {

  title = "Ürün Listesi";
  filterText = "";
  products: Product[] = [
    { id: 1, name: "Laptop", price: 2500, categoryid: 1, description: "Asus Zenbook", imageUrl: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80" },
    { id: 2, name: "Mouse", price: 25, categoryid: 2, description: "Logitech Pebble", imageUrl: "https://images.unsplash.com/photo-1527814050087-3793815479db?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1028&q=80" },
  ]

  constructor() {

  }

  addtoCard(product: Product) {
    alertify.success(product.name + " Added.");
  }

}
