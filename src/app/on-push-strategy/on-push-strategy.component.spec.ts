import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OnPushStrategyComponent } from './on-push-strategy.component';

describe('OnPushStrategyComponent', () => {
  let component: OnPushStrategyComponent;
  let fixture: ComponentFixture<OnPushStrategyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OnPushStrategyComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OnPushStrategyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
