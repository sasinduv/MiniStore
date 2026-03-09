import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {Product} from '../services/product';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-product-details',
  imports: [
    NgIf,

  ],
  templateUrl: './product-details.html',
  styleUrl: './product-details.scss',
})
export class ProductDetails implements OnInit{
  product:any;
  constructor(private route:ActivatedRoute,private service:Product) {

  }

  ngOnInit() {
   const id = this.route.snapshot.paramMap.get('id');
    this.service.findProductById(id).subscribe({
      next:(response:any) =>{
        this.product=response;
        console.log(this.product);
      }
    })

  }
}
