import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppDeleteaccountPageComponent } from './app-deleteaccount-page.component';

describe('AppDeleteaccountPageComponent', () => {
  let component: AppDeleteaccountPageComponent;
  let fixture: ComponentFixture<AppDeleteaccountPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppDeleteaccountPageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppDeleteaccountPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
