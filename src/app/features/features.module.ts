import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ShareInfoService } from '../common/providers/share-info.service';
import { HomeComponent } from './home/home.component';
import { YogaComponent } from './yoga/yoga.component';
import { WorkoutComponent } from './workout/workout.component';


@NgModule({
  declarations: [HomeComponent, YogaComponent, WorkoutComponent],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  providers: [],
})
export class FeaturesModule { }
