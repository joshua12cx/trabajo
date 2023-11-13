import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstadoComponent } from './estado.component';


const routes: Routes = [
  { path:'',
  component: EstadoComponent,
  outlet:"child"},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class EstadoRoutingModule { }
