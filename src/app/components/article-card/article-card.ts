import { ChangeDetectionStrategy, Component, input } from '@angular/core';

@Component({
  selector: 'app-article-card',
  imports: [],
  templateUrl: './article-card.html',
  styleUrl: './article-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ArticleCard {
  readonly title = input.required<string>();
  readonly imgSrc = input.required<string>();
  readonly rating = input<number>(0);
}
