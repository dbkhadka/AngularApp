import { Component } from '@angular/core';
import { Input,Output } from '@angular/core';
import {EventEmitter} from '@angular/core';

@Component({
  selector: 'app-product-alerts',
  templateUrl: './product-alerts.component.html',
  styleUrls: ['./product-alerts.component.css']
})
export class ProductAlertsComponent{
  @Input() product;
  @Output()notify = new EventEmitter();

  isProductPriceGreaterThan700(){
    return this.product.price > 700;
  }
}