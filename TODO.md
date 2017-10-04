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
- 1 Refactoring compoennts in page and vice
- 2 Sign In, Log out, protecting routing.
- 3 role in signup, company and buyer
- 4 display info from id session


