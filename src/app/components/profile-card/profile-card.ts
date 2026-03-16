import { Component, input } from '@angular/core';
import { Avatar } from '../shared/avatar/avatar';
import { Card } from '../shared/card/card';
import { Button } from '../shared/button/button';

@Component({
  selector: 'app-profile-card',
  imports: [Avatar, Card, Button],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.scss',
})
export class ProfileCard {
  readonly avatarImgSrc = input.required<string>();
  readonly fullName = input.required<string>();
  readonly userTag = input.required<string>();
}
