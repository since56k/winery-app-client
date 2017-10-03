<div *ngIf="loading">
...loading
</div>

<div *ngIf="!loading">
	<div *ngIf="!user">
		login / signup or nothing if you cand do that from other place
	</div>

	<app-navbar-admin *ngIf="user && user.role === 'admin'"></app-navbar-admin>
		</div>


-- refactoring:

-1 services

-2 components
-2.1 admin page

-3 pages

-4 provider


