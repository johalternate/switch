import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EndlessCmp } from './endless.cmp';

describe('EndlessCmp', () => {
  let component: EndlessCmp;
  let fixture: ComponentFixture<EndlessCmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EndlessCmp]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(EndlessCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
