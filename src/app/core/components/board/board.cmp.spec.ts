import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardCmp } from './board.cmp';

describe('BoardCmp', () => {
  let component: BoardCmp;
  let fixture: ComponentFixture<BoardCmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BoardCmp]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BoardCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
