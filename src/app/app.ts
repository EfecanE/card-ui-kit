import { Component, signal } from '@angular/core';
import { ProfileCard } from './components/profile-card/profile-card';
import { Creators } from './components/creators/creators';
import { PostCard } from './components/post-card/post-card';
import { PostActions } from './components/shared/post-actions/post-actions';
import { Card } from './components/shared/card/card';
import { ArticleCard } from './components/article-card/article-card';
import { MiniArticleCard } from './components/mini-article-card/mini-article-card';

@Component({
  selector: 'app-root',
  imports: [ProfileCard, Creators, PostCard, PostActions, Card, ArticleCard, MiniArticleCard],
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected readonly title = signal('card-ui-kit');
}
