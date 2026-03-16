import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MiniArticleCard } from './mini-article-card';

describe('MiniArticleCard', () => {
  let component: MiniArticleCard;
  let fixture: ComponentFixture<MiniArticleCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MiniArticleCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MiniArticleCard);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
