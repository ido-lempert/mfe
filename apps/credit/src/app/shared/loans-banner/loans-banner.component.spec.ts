import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoansBannerComponent } from './loans-banner.component';

describe('LoansBannerComponent', () => {
  let component: LoansBannerComponent;
  let fixture: ComponentFixture<LoansBannerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoansBannerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoansBannerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
