import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { InformeRoutingModule } from './informe-routing.module';
import { InformeComponent } from './pages/informe/informe.component';


@NgModule({
  declarations: [
    InformeComponent
  ],
  imports: [
    CommonModule,
    InformeRoutingModule
  ]
})
export class InformeModule { }
