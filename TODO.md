<div *ngIf="loading">
...loading
</div>

<div *ngIf="!loading">
	<div *ngIf="!user">
		login / signup or nothing if you cand do that from other place
	</div>

	<app-navbar-admin *ngIf="user && user.role === 'admin'"></app-navbar-admin>
		</div>

		// ngOnInit() {
//     this.getListBuyer();
//     this.getListCompany();
//   }

//   getListBuyer(){
//     this.adminService.getListBuyer()
//     .subscribe((buyers) => {
//       this.dataListBuyer = buyers;
//     });
//   }

//   getListCompany(){
//     this.adminService.getListCompany()
//     .subscribe((companies) => {
//       this.dataListCompany = companies;
//     });
//   }

// getBuyer(id) {
//     this.buyerService.getBuyer(id)
//       .subscribe((buyer) => {
//         this.buyer = buyer;
         
//     })
//   }

// ngOnInit() {
//     this.route.params.subscribe(params => {
//       this.getBuyer(params['id']);
//     });
//   }


-- refactoring
-- 1 create area for admin and company 
-- 2 signin / up with role verification 
-- 3 update backend and update info frontend
-- 4 display all products and company in buyer
-- 5 display own company products in company
-- 6 cart buyer

-- Google Maps and save it in database

