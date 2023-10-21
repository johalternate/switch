import { TestBed } from '@angular/core/testing';
import { AppCmp } from './app.cmp';

describe('AppCmp', () => {
  beforeEach(() =>
    TestBed.configureTestingModule({
      imports: [AppCmp],
    })
  );

  it('should create the app', () => {
    const fixture = TestBed.createComponent(AppCmp);
    const app = fixture.componentInstance;
    expect(app).toBeTruthy();
  });
});
