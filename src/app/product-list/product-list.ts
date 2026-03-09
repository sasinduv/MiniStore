import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Product} from '../services/product';
import {ProductArray} from '../types/ProductArray';
import {ProductCard} from '../product-card/product-card';
import {NgForOf} from '@angular/common';

@Component({
  selector: 'app-product-list',
  imports: [
    ProductCard,
    NgForOf
  ],
  templateUrl: './product-list.html',
  styleUrl: './product-list.scss',
})

  export class ProductList implements OnInit {
  productList:any[]=[]; constructor(private service:Product) { } ngOnInit(): void { this.load(); }
  load(){ this.service.findAllProducts().subscribe({ next:(res:any)=> { this.productList = res; console.log(this.productList) },
    error:(err:any)=>{ console.log(err); }
  })
  }

  search(event:any){
    const value=event;
  }
}



