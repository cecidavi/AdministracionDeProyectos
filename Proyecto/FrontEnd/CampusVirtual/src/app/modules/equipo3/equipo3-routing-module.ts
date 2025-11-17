import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HolaEquipo3 } from './src/hola-equipo3/hola-equipo3';
<<<<<<< HEAD
import { Deportes } from './src/deportes/deportes';
import { Calendario } from './src/deportes/calendario/calendario';
=======
import { Calendario } from './src/calendario/calendario';

>>>>>>> d61822f36e4b5f4c63f917d4953326aeea53711f

const routes: Routes = [
    {
        path: '',
        component: HolaEquipo3,
    },
<<<<<<< HEAD
      {
    path: 'deportes',
    component: Deportes
  },
  {
    path: 'deportes/calendario',
    component: Calendario
  }
=======
    {
        path: 'calendario',
        component: Calendario,
    }
>>>>>>> d61822f36e4b5f4c63f917d4953326aeea53711f
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Equipo3RoutingModule {}
