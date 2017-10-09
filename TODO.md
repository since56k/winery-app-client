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
-- 1 display all products and company in buyer
-- 2 display own company products in company
-- 3 cart buyer sum and database incrementation



-- Google Maps and save it in database

