import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }    from "@angular/router";

import { environment } from '../../../../environments/environment';

//Services
import { CompanyService } from '../../../services/company/company.service';
import { ProductsService } from '../../../services/product/products.service';
import { AuthService } from '../../../services/auth/auth.service';

//Model
import { User } from '../../../models/user.model';

//Third part
import {  FileUploader } from 'ng2-file-upload/ng2-file-upload';

//URL = '/api/';
const URL = 'http://localhost:3000/api/products/newproduct';

const apiUrl = environment.apiUrl;


@Component({
  selector: 'app-company-profile',
  templateUrl: './company-profile.component.html',
  styleUrls: ['./company-profile.component.css']
})
export class CompanyProfileComponent implements OnInit, OnDestroy {

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
    userId: '',
    name: '',
    category: '',
    type: '',
    price: '',
    organic: Boolean,
  };

  companyData = {
    username: String,
    email: String,
    organic: Boolean,
    fileName: null,
  };

  subscriptions = [];
  user: User;
	company: any;
  products: any;
  message: string;
  auth: boolean = true;
  showHide: boolean = true;
  uploadRequired: boolean;


  constructor(
  	private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private productsService: ProductsService,
  	private companyService: CompanyService
  	) { }

  ngOnInit() {
     
    this.auth = false;

    this.user = this.authService.getUser();
      let subscription = this.authService.userChange$.subscribe((user) => {
      this.user = user;
    });

    this.subscriptions.push(subscription);  

    //call get buyer if i get param from route
    this.route.params.subscribe(params => {
      this.getCompany(params['id']);
      this.getProductByCompany(params['id']);
    })

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

  getProductByCompany(id){
    this.productsService.getProductByCompany(id)
    .subscribe((product) => {
      this.products = product;
    });
  }

  displayForm(){
     this.showHide = false;
  }

  submitForm() {
      this.uploader.onBuildItemForm = (item, form) => {
        form.append('userId', this.user.id)
        form.append('name', this.newProduct.name);
        form.append('category', this.newProduct.category);
        form.append('type', this.newProduct.type);
        form.append('price', this.newProduct.price);
        form.append('organic', this.newProduct.organic);
        //date
      };

      this.uploader.uploadAll();

      setTimeout(()=>{this.getProductByCompany(this.user.id); this.showHide = true;}, 500);

    }
   
  deleteProduct(productId) {
  if (window.confirm('Are you sure?')) {
    this.productsService.removeProduct(productId)
      .subscribe(res => {
        this.message = res.message; 
        this.getProductByCompany(this.user.id);
        console.log(res);
      });
    }
  }

  ngOnDestroy() {
    this.subscriptions.forEach((subscription) => subscription.unsubscribe());
  }

  logout() {
    this.authService.logout().subscribe();
      this.router.navigate(['/auth/signin']);
  }

}
