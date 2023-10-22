import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ToolbarCmp } from './toolbar.cmp';

describe('ToolbarCmp', () => {
  let component: ToolbarCmp;
  let fixture: ComponentFixture<ToolbarCmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToolbarCmp]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ToolbarCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
