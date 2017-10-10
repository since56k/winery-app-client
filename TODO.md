<div *ngIf="loading">
...loading
</div>

<div *ngIf="!loading">
	<div *ngIf="!user">
		login / signup or nothing if you cand do that from other place
	</div>
 
	<app-navbar-admin *ngIf="user && user.role === 'admin'"></app-navbar-admin>
		</div>


-- Get Upgrade everywhere
-- Add cart in buyer 

-- refactoring
-- 1 define all the form with the model in backend
-- 2 diplsay form with input
-- 3 create 3 components, profile update for buyers and company, and for detailed product

-- Solve
-- 0 
-- 1 auth from other account 

-- Google Maps and save it in database



 // handleUpdateBuyer(form) {
  //   const editBuyer = { id: this.user.id, username: form.value.username, email: form.value.email, role: form.value.role };
  //     this.buyerService.editBuyer(editBuyer)
  //     .subscribe(
  //       res => {
  //       this.message = res.message; 
  //       this.getBuyer(this.user.id);
  //       this.showHide = true;

  //     },
  //       error => {
  //           console.log('error to upload buyer');
  //     });
   
  // }


<!--   <form (ngSubmit)="handleNewCompany(companyForm)" #companyForm="ngForm" >
  <label>name</label>
  <input type="text" name="username" [(ngModel)]="username">
  <input type="text" name="email" [(ngModel)]="email">
  <select name="role" [(ngModel)]="role">
      <option *ngFor="let role of roles" [value]="role.value">  
        {{role.display}}
      </option>
  </select>
  <button type="submit">Add</button>
</form> -->
