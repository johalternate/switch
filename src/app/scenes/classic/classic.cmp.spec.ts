import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClassicCmp } from './classic.cmp';

describe('ClassicCmp', () => {
  let component: ClassicCmp;
  let fixture: ComponentFixture<ClassicCmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClassicCmp]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ClassicCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
