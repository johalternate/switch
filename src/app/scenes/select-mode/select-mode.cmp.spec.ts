import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SelectModeCmp } from './select-mode.cmp';
import { By } from '@angular/platform-browser';

describe('SelectModeCmp', () => {
  let component: SelectModeCmp;
  let fixture: ComponentFixture<SelectModeCmp>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SelectModeCmp],
    }).compileComponents();

    fixture = TestBed.createComponent(SelectModeCmp);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should render modes correctly', () => {
    const modeLinks = fixture.debugElement.queryAll(By.css('.options a'));
    expect(modeLinks.length).toBe(fixture.componentInstance.modes().length);
    expect(modeLinks[0].nativeElement.textContent).toContain('Classic');
  });
});
