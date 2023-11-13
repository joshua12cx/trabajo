import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsignacionComponent } from './asignacion.component';


const routes: Routes = [
  { path:'',
  component: AsignacionComponent,
  outlet:"child"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AsignacionRoutingModule { }
