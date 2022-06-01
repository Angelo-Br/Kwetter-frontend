import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppChangeusernamePageComponent } from './app-changeusername-page.component';

describe('AppChangeusernamePageComponent', () => {
  let component: AppChangeusernamePageComponent;
  let fixture: ComponentFixture<AppChangeusernamePageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AppChangeusernamePageComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AppChangeusernamePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
