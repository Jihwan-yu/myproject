import { Component,ViewEncapsulation } from '@angular/core';
import {Product,ProductService} from './service/product.service';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation:ViewEncapsulation.None
})
export class AppComponent {
  products: Array<Product> =[];
  title = 'auction';

  constructor(private productService : ProductService){
    this.products = this.productService.getProducts();
  }
}
