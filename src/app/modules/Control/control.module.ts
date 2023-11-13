import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ControlRoutingModule } from './control-routing.module';
import { ControlComponent } from './pages/control/control.component';


@NgModule({
  declarations: [
    ControlComponent
  ],
  imports: [
    CommonModule,
    ControlRoutingModule
  ]
})
export class ControlModule { }
