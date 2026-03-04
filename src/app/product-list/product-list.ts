import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Product} from '../services/product';
import {ProductArray} from '../types/ProductArray';

@Component({
  selector: 'app-product-list',
  imports: [],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})
export class ProductList implements OnInit{

  productList:any[]=[];
  constructor(private _service:Product) {
  }
    ngOnInit(): void {
      this.load();
    }
    // load(){
    //   this._service.findAllProducts().subscribe((response)=>{
    //     this.productList.push(response);
    //     console.log(this.productList)
    //
    //   })
    // }
  load() {
    this._service.findAllProducts().subscribe((response: ProductArray[]) => {
      this.productList = response;   // ✅ correct
      console.log(this.productList);
    });

}
