import { Component } from '@angular/core';

@Component({
  selector: 'app-calendario',
  imports: [],
  templateUrl: './calendario.html',
  styleUrl: './calendario.css'
})
export class Calendario {
partidos = [
    {
      fecha: '2025-11-20',
      hora: '14:00',
      equipoA: 'Tigres',
      equipoB: 'Leones'
    },
    {
      fecha: '2025-11-22',
      hora: '16:30',
      equipoA: 'Pumas',
      equipoB: 'Águilas'
    },
    {
      fecha: '2025-11-25',
      hora: '12:00',
      equipoA: 'Halcones',
      equipoB: 'Toros'
    }
  ];
}
