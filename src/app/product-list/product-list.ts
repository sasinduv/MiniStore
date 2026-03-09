import {Component, OnInit} from '@angular/core';
import {RouterOutlet} from '@angular/router';
import {Product} from '../services/product';
import {ProductArray} from '../types/ProductArray';
import {ProductCard} from '../product-card/product-card';
import {NgForOf} from '@angular/common';
import {debounceTime, Subject} from 'rxjs';

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

  allProducts:any[]=[];
  productList:any[]=[];

  searchSubject=new Subject<string>();
  constructor(private service:Product) { }
  ngOnInit(): void {
    this.load();
    this.searchSubject.pipe(debounceTime(500)) .subscribe(value => this.filterProducts(value))
  }
  load(){
    this.service.findAllProducts().subscribe({
      next:(res:any)=> {
    this.productList = res;
    this.allProducts=res;
    },
    error:(err:any)=>{
    console.log(err);
  }
  })
  }

  search(searchText:string){ const text=searchText.toLowerCase(); this.searchSubject.next(text); }
  filterProducts(value:string){
    this.productList=this.allProducts.filter(p=> p.title.toLowerCase().includes(value) ) }
}



