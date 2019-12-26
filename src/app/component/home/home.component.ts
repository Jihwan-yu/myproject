import { Component } from '@angular/core';
import {Product,ProductService} from '../../service/product.service';
@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  products:Product[]=[];
  constructor(private prodService:ProductService) {
    this.products = prodService.getProducts();
   }
}
