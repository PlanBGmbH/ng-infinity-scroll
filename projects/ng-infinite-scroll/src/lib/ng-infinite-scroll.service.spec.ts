import { TestBed } from '@angular/core/testing';

import { NgInfiniteScrollService } from './ng-infinite-scroll.service';

describe('NgInfiniteScrollService', () => {
	let service: NgInfiniteScrollService;

	beforeEach(() => {
		TestBed.configureTestingModule({});
		service = TestBed.inject(NgInfiniteScrollService);
	});

	it('should be created', () => {
		expect(service).toBeTruthy();
	});
});
