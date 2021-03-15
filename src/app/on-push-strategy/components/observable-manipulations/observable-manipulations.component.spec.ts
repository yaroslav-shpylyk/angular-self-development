import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableManipulationsComponent } from './observable-manipulations.component';

describe('ObservableManipulationsComponent', () => {
  let component: ObservableManipulationsComponent;
  let fixture: ComponentFixture<ObservableManipulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObservableManipulationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObservableManipulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
