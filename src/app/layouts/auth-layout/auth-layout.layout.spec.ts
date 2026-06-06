import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AuthLayoutLayout } from './auth-layout.layout';

describe('AuthLayoutLayout', () => {
  let component: AuthLayoutLayout;
  let fixture: ComponentFixture<AuthLayoutLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AuthLayoutLayout]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AuthLayoutLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
