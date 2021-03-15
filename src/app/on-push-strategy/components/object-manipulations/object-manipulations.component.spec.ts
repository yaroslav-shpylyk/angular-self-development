import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObjectManipulationsComponent } from './object-manipulations.component';

describe('InfoComponent', () => {
  let component: ObjectManipulationsComponent;
  let fixture: ComponentFixture<ObjectManipulationsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ObjectManipulationsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ObjectManipulationsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
