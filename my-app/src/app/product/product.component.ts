import { Component, Input, OnInit } from '@angular/core';
import { IProduct } from '../components/models/products';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
@Input() product: IProduct

details = false
term =''
  constructor() { }

  ngOnInit(): void {
  }
  

}
