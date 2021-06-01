import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ShareInfoService } from '../common/providers/share-info.service';
import { HomeComponent } from './home/home.component';
import { YogaComponent } from './yoga/yoga.component';
import { WorkoutComponent } from './workout/workout.component';
import { DietComponent } from './diet/diet.component';
import { AboutComponent } from './about/about.component';
import { ShareModule } from '../common/share.module';
import { YogaWorkoutComponent } from './yoga-workout/yoga-workout.component';


@NgModule({
  declarations: [HomeComponent, YogaComponent, WorkoutComponent, DietComponent, AboutComponent, YogaWorkoutComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    ShareModule
  ],
  providers: [],
})
export class FeaturesModule { }
