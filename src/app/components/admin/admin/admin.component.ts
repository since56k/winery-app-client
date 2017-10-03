import { Component, OnInit } from '@angular/core';
import { AdminService } from '../../../services/admin/admin.service';
import { FileSelectDirective } from "ng2-file-upload";


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css'],
  providers: [AdminService]
})
export class AdminComponent implements OnInit {

	dataListBuyer;
	dataListCompany;

  constructor(private adminService: AdminService) { }

  ngOnInit() {
  	
  }

  

}


