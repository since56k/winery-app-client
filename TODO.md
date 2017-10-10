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
-- 2 
-- 3 

-- Solve
-- 1 Observable
-- 2 auth from other account 

-- Google Maps and save it in database

