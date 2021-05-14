import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PreHomeComponent } from './pre-home/pre-home.component';

const routes: Routes = [
  { path: '', redirectTo: 'preHome', pathMatch: 'full' },
  { path: 'preHome', component: PreHomeComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PreloginRoutingModule { }
