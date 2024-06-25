import { Component, computed, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgScrollObserverDirective } from '@planbgmbh/ng-infinite-scroll';

@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NgScrollObserverDirective],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
export class AppComponent {
	title = 'ng-infinite-scroll-demo';
	/**
	 * This is the list of the comple item count.
	 * Instead of storing all the items here in that list it's recommended to get e.g. the first page of
	 * items from a backend and then load more items as the user scrolls.
	 * The backend should provide the total count to make the scrolling work correctly.
	 */
	private items = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
	];
	/**
	 * This is the number of currently loaded items. It's called visibleCount because it's the count of the visible items.
	 * If you're using a backend for the items, this is the total count of items you've loaded from the backend so far.
	 */
	private visibleCount = signal<number>(10);

	/**
	 * This is not required if you load your items from a backend. This is just a computed property to get the visible items.
	 */
	public visibleItems = computed(() => this.items.slice(0, this.visibleCount()));

	/**
	 * This function should trigger loading the next page of items from the backend if you're using a backend.
	 */
	public loadMoreItems = () => {
		if (this.items.length >= this.visibleCount()) this.visibleCount.set(this.visibleCount() + 10);
	};
}
