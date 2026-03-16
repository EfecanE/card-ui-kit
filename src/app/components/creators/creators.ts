import { ChangeDetectionStrategy, Component, input } from '@angular/core';
import { Card } from '../shared/card/card';
import { Avatar } from '../shared/avatar/avatar';

@Component({
  selector: 'app-creators',
  imports: [Card, Avatar],
  templateUrl: './creators.html',
  styleUrl: './creators.scss',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class Creators {
  readonly title = input.required<string>();
  readonly avatars = input<string[]>([
    'assets/avatar (1).png',
    'assets/avatar (2).png',
    'assets/avatar (3).png',
    'assets/avatar (4).png',
  ]);
}
