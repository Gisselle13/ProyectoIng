import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styleUrls: ['./eventos.component.css']
})
export class EventosComponent implements OnInit {
  imagesConfig = {
    1: [{ grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)' }]
  };
  images = [
    { src: 'assets/img/reforestacion.jpg', grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)' },
    { src: 'assets/img/reforestacion2.jpg', grow: 1, shrink: 0, basis: 'calc(50% - 0.5rem)' },
    { src: 'assets/img/reforestacion3.jpg', grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)' },
    { src: 'assets/img/reforestacion4.jpg', grow: 1, shrink: 0, basis: 'calc(50% - 0.5rem)' },
    { src: 'assets/img/reforestacion7.jpg', grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)' },
    { src: 'assets/img/reforestacion6.jpg', grow: 1, shrink: 0, basis: 'calc(25% - 0.5rem)' },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
