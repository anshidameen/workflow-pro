import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdminLayoutLayout } from './admin-layout.layout';

describe('AdminLayoutLayout', () => {
  let component: AdminLayoutLayout;
  let fixture: ComponentFixture<AdminLayoutLayout>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AdminLayoutLayout]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AdminLayoutLayout);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
