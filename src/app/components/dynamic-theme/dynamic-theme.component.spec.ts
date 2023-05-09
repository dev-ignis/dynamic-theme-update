import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DynamicThemeComponent } from './dynamic-theme.component';

describe('DynamicThemeComponent', () => {
  let component: DynamicThemeComponent;
  let fixture: ComponentFixture<DynamicThemeComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DynamicThemeComponent]
    });
    fixture = TestBed.createComponent(DynamicThemeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
