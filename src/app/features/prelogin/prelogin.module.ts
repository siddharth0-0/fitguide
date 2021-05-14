import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PreloginRoutingModule } from './prelogin-routing.module';
import { PreHomeComponent } from './pre-home/pre-home.component';
import { ShareInfoService } from 'src/app/common/providers/share-info.service';


@NgModule({
  declarations: [PreHomeComponent],
  imports: [
    CommonModule,
    PreloginRoutingModule
  ],
  providers: [ShareInfoService],
})
export class PreloginModule { }
