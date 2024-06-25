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
	private items = [
		1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25,
	];
	private visibleCount = signal<number>(10);

	public visibleItems = computed(() => this.items.slice(0, this.visibleCount()));

	public loadMoreItems = () => {
		if (this.items.length >= this.visibleCount()) this.visibleCount.set(this.visibleCount() + 10);
	};
}
