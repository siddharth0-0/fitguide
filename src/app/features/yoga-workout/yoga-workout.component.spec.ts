import { ComponentFixture, TestBed } from '@angular/core/testing';

import { YogaWorkoutComponent } from './yoga-workout.component';

describe('YogaWorkoutComponent', () => {
  let component: YogaWorkoutComponent;
  let fixture: ComponentFixture<YogaWorkoutComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ YogaWorkoutComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(YogaWorkoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
