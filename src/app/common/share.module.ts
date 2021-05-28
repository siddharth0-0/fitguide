import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { YogaModalComponent } from './components/yoga-modal/yoga-modal.component';



@NgModule({
  declarations: [LoginModalComponent, YogaModalComponent],
  imports: [
    CommonModule
  ],
  exports:[LoginModalComponent, YogaModalComponent]
})
export class ShareModule { }
