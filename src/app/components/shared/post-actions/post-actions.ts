import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-post-actions',
  imports: [],
  templateUrl: './post-actions.html',
  styleUrl: './post-actions.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostActions {
  readonly likes = input.required<number>();
  readonly saves = input.required<number>();
  readonly comments = input.required<number>();
}
