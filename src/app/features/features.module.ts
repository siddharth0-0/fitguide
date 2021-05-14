import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FeaturesRoutingModule } from './features-routing.module';
import { ShareInfoService } from '../common/providers/share-info.service';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule
  ],
  providers: [ShareInfoService],
})
export class FeaturesModule { }
