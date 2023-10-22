import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PauseCmp } from './pause.cmp';

describe('PauseCmp', () => {
  let component: PauseCmp;
  let fixture: ComponentFixture<PauseCmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PauseCmp]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PauseCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
