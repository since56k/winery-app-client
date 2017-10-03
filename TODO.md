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


-- refactoring:

-1 services

-2 components
-2.1 admin page

-3 pages

-4 provider


