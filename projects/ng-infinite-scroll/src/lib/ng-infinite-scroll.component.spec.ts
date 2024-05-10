import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgInfiniteScrollComponent } from './ng-infinite-scroll.component';

describe('NgInfiniteScrollComponent', () => {
	let component: NgInfiniteScrollComponent;
	let fixture: ComponentFixture<NgInfiniteScrollComponent>;

	beforeEach(async () => {
		await TestBed.configureTestingModule({
			imports: [NgInfiniteScrollComponent],
		}).compileComponents();

		fixture = TestBed.createComponent(NgInfiniteScrollComponent);
		component = fixture.componentInstance;
		fixture.detectChanges();
	});

	it('should create', () => {
		expect(component).toBeTruthy();
	});
});
