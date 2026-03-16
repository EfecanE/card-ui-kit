import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-mini-article-card',
  imports: [],
  templateUrl: './mini-article-card.html',
  styleUrl: './mini-article-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MiniArticleCard {
  readonly title = input.required<string>();
  readonly imgSrc = input.required<string>();
}
