import { Component, input } from '@angular/core';

@Component({
  selector: 'app-avatar',
  imports: [],
  templateUrl: './avatar.html',
  styleUrl: './avatar.scss',
})
export class Avatar {
  readonly avatarImgSrc = input.required<string>();
  readonly avatarSizePx = input.required<string>();
}
