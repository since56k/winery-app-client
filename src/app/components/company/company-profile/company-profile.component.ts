import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute }    from "@angular/router";

//Services
import { CompanyService } from '../../../services/company/company.service';
import { ProductsService } from '../../../services/product/products.service';

//Third part
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

//URL = '/api/';
const URL = 'http://localhost:3000/api/products/newproduct';



@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit {

  public uploader:FileUploader = new FileUploader({url: URL});

  public categories = [
    { value: 'Wine', display: 'Wine' },
    { value: 'Sparkling Wine', display: 'Sparkling Wine' },
    { value: 'Champagne', display: 'Champagne' }
  ];

  public types = [
    { value: 'Red', display: 'Red' },
    { value: 'White', display: 'White' },
    { value: 'Rosè', display: 'Rosè' }
  ];

  newProduct = {
    name: '',
    category: '',
    type: ''
  };

	company: any;
  products: any;
  message: any;

  constructor(
  	private route: ActivatedRoute,
    private productsService: ProductsService,
  	private companyService: CompanyService
  	) { }

  ngOnInit() {
  	// this.route.params.subscribe(params => {
   //  this.getCompany(params['id']);
 		// })
  
    this.getListProduct();

    //Upload Images
    this.uploader.onSuccessItem = (item, response) => {
      this.message = JSON.parse(response).message;
    };

    this.uploader.onErrorItem = (item, response, status, headers) => {
      this.message = JSON.parse(response).message;
    };
	}

  getCompany(id) {
    this.companyService.getCompany(id)
      .subscribe((company) => {
        this.company = company;
       })
  }

  getListProduct(){
    this.productsService.getListProduct()
    .subscribe((product) => {
      this.products = product;
    });
  }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('name', this.newProduct.name);
      form.append('category', this.newProduct.category);
      form.append('type', this.newProduct.type);

    };

    this.uploader.uploadAll();
    
    setTimeout(()=>{this.getListProduct()}, 500);

}

  deleteProduct(productId) {
  if (window.confirm('Are you sure?')) {
    this.productsService.removeProduct(productId)
      .subscribe(res => {
        this.message = res.message; 
        this.getListProduct();
        console.log(res);
      });
    }
  }



}
