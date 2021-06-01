import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginModalComponent } from './components/login-modal/login-modal.component';
import { YogaModalComponent } from './components/yoga-modal/yoga-modal.component';
import { NavbarComponent } from './components/navbar/navbar.component';



@NgModule({
  declarations: [LoginModalComponent, YogaModalComponent, NavbarComponent],
  imports: [
    CommonModule
  ],
  exports:[LoginModalComponent, YogaModalComponent, NavbarComponent]
})
export class ShareModule { }
