import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MainMenuCmp } from './main-menu.cmp';

describe('MainMenuCmp', () => {
  let component: MainMenuCmp;
  let fixture: ComponentFixture<MainMenuCmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MainMenuCmp]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(MainMenuCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
