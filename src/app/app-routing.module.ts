import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EstudianteComponent } from './components/estudiante/estudiante.component';
import { HorarioComponent } from './components/horario/horario.component';
import { IndexComponent } from './components/index/index.component';

const routes: Routes = [
  {path:'',component: IndexComponent},
  {path:'horario',component: HorarioComponent},
  {path:'estudiante',component: EstudianteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
