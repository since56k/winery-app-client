import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service';
import { Http } from '@angular/http';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService]
})
export class AdminComponent implements OnInit {

	dataListBuyer;
	dataListCompany;

  constructor(private handleData: AdminService) { }

  ngOnInit() {
  	this.getListBuyer();
  	this.getListCompany();
  }

  getListBuyer(){
  	this.handleData.getListBuyer()
  	.subscribe((buyers) => {
  		this.dataListBuyer = buyers;
    });
  }

  getListCompany(){
  	this.handleData.getListCompany()
  	.subscribe((companies) => {
  		this.dataListCompany = companies;
    });
  }

}
