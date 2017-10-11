import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductsService } from '../../../services/product/products.service';
import {Location} from '@angular/common';

import { environment } from '../../../../environments/environment';

const apiUrl = environment.apiUrl;

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

	product: any;

  constructor(
  	private productsService: ProductsService,
  	private route: ActivatedRoute,
    private router: Router,
    private location: Location
  	) { }

  ngOnInit() {
  	this.route.params.subscribe(params => {
      this.getProduct(params['id']);
 		})
  }

  getProduct(id){
  		this.productsService.getProduct(id).subscribe((product) => {
        this.product = product;
       })
  }

  goBack(){
        this.location.back();
  }

}
