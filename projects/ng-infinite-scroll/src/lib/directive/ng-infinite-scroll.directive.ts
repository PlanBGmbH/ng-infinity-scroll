import {
	Directive,
	ElementRef,
	EventEmitter,
	Input,
	OnDestroy,
	OnInit,
	Output,
} from '@angular/core';

@Directive({
	selector: '[ngScrollObserver]',
	standalone: true,
})
export class NgScrollObserverDirective implements OnInit, OnDestroy {
	/**
	 * Event that is triggered as the scrolling reaches the threshold.
	 */
	@Output() scrollNearEnd: EventEmitter<void> = new EventEmitter<void>();

	/**
	 * Index of the current item in a list where this directive is sitting on.
	 */
	@Input() scrollIndex = 0;

	/**
	 * Count of the complete list where this directive is used
	 */
	@Input() scrollItemCount = 0;

	/**
	 * Threshold which is used by the Intersection Observer.
	 * Normally you should not change this. Change it only if you know what you're doing :)
	 */
	@Input() scrollObserverThreshold = 1.0;

	/**
	 * Scroll threshold. Default is 2. So if you scroll and reach the second last item in your list, the "scrollNearEnd" event is triggered.
	 * If you change it to e.g. 3 it's triggered when you reach the third last item and so on.
	 */
	@Input() scrollThreshold = 2;

	private observer?: IntersectionObserver;

	constructor(private el: ElementRef) {}

	ngOnInit() {
		this.observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					// Here we build the conditions for the scrollNearEnd event to be emitted
					// First: it should be the second last element in the list
					const isSecondLastElement =
						this.scrollItemCount === this.scrollIndex + this.scrollThreshold;
					// Second: we using if the element is intersecting (visible in the viewport)
					if (isSecondLastElement && entry.isIntersecting) {
						this.scrollNearEnd.emit();
					}
				});
			},
			{
				threshold: this.scrollObserverThreshold,
			},
		);
		// Need timeout to wait for the element to be fully rendered so that the intersection observer is not triggered
		// while the element doesn't yet has it's final size.
		setTimeout(() => this.observer?.observe(this.el.nativeElement), 400);
	}

	ngOnDestroy() {
		this.observer?.unobserve(this.el.nativeElement);
	}
}
