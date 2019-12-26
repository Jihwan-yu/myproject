import { Component, Input } from '@angular/core';
import {StarsComponent} from '../stars/stars.component';
import {Product} from '../../service/product.service';
@Component({
  selector: 'product-item',
  templateUrl: './product-item.component.html',
  styleUrls: ['./product-item.component.css']
})
export class ProductItemComponent {
  @Input() product :Product
}
