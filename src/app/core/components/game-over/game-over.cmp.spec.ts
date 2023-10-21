import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GameOverCmp } from './game-over.cmp';

describe('GameOverCmp', () => {
  let component: GameOverCmp;
  let fixture: ComponentFixture<GameOverCmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GameOverCmp]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(GameOverCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
