import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Card } from '../shared/card/card';
import { Avatar } from '../shared/avatar/avatar';
import { PostActions } from '../shared/post-actions/post-actions';

@Component({
  selector: 'app-post-card',
  imports: [Card, Avatar, PostActions],
  templateUrl: './post-card.html',
  styleUrl: './post-card.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PostCard {
  readonly authorName = input.required<string>();
  readonly timeAgo = input.required<string>();
  readonly content = input.required<string>();
  readonly likes = input.required<number>();
  readonly saves = input.required<number>();
  readonly comments = input.required<number>();
  readonly avatarImgSrc = input.required<string>();
}
