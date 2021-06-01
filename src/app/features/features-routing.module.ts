import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { DietComponent } from './diet/diet.component';
import { HomeComponent } from './home/home.component';
import { WorkoutComponent } from './workout/workout.component';
import { YogaWorkoutComponent } from './yoga-workout/yoga-workout.component';
import { YogaComponent } from './yoga/yoga.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component :HomeComponent },
  { path: 'yoga', component :YogaComponent },
  { path: 'workout', component :WorkoutComponent },
  { path: 'diet', component :DietComponent },
  { path: 'about', component :AboutComponent },
  { path: 'yogaWorkout', component: YogaWorkoutComponent}

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FeaturesRoutingModule { }
