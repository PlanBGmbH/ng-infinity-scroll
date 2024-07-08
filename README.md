# NgInfinityScroll

![DALL-E Prompt: Angular Infinity Scroll](/docs/images/header.png)

This library provides a directive to implement infinite scrolling in Angular applications. The directive listens to the scroll event and emits an event when the user is near the end of the scrollable container.

## Basic Usage

1. Install the package from the registry. Make sure you have added the Github PlanB. registry to your `.npmrc` file.

```bash
npm install @planbgmbh/ng-infinity-scroll
```

2. Import the directive into your application / component where you want to use it.

```typescript
import { NgScrollObserverDirective } from '@planbgmbh/ng-infinite-scroll';
@Component({
	selector: 'app-root',
	standalone: true,
	imports: [RouterOutlet, NgScrollObserverDirective],
	templateUrl: './app.component.html',
	styleUrl: './app.component.scss',
})
```

3. Use the directive inside your template.

```html
<div
	ngScrollObserver
	[scrollIndex]="$index"
	[scrollItemCount]="visibleItems().length"
	(scrollNearEnd)="loadMoreItems()"
	class="scroll-item"
>
	Item {{ item }}
</div>
```

## Supported Angular Version

We currently support every Angular Version with a minimum requirement of Angular 17.0.0.

| Package Version | Supported Angular Version |
| --------------- | ------------------------- |
| 1.x             | 17, 18                    |

## Credits

Image generated from DALL-E with prompt: `Angular Infinity Scroll`
