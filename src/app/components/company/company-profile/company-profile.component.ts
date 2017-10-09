import { Component, OnInit, Input, OnDestroy } from '@angular/core';
import { Router, ActivatedRoute }    from "@angular/router";

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
    type: ''
  };

  subscriptions = [];
  user: User;
	company: any;
  products: any;
  message: any;


  constructor(
  	private route: ActivatedRoute,
    private authService: AuthService,
    private router: Router,
    private productsService: ProductsService,
  	private companyService: CompanyService
  	) { }

  ngOnInit() {
    //get user
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

  getProductByCompany(id){
    this.productsService.getProductByCompany(id)
    .subscribe((product) => {
      this.products = product;
      console.log(this.products)
    });
  }

  submit() {
    this.uploader.onBuildItemForm = (item, form) => {
      form.append('userId', this.user.id)
      form.append('name', this.newProduct.name);
      form.append('category', this.newProduct.category);
      form.append('type', this.newProduct.type);
    };

    this.uploader.uploadAll();
    
    setTimeout(()=>{this.getProductByCompany(this.user.id)}, 500);
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
