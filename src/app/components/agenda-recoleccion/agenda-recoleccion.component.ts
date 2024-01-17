import { Component, OnInit, VERSION } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-agenda-recoleccion',
  templateUrl: './agenda-recoleccion.component.html',
  styleUrls: ['./agenda-recoleccion.component.css' , '../inicio/inicio.scss']
})
export class AgendaRecoleccionComponent implements OnInit {

  isActive = false;

  name = 'Angular ' + VERSION.major;
  images: any[] = new Array()
  constructor(config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 5000;
    config.keyboard = true;
    config.pauseOnHover = true;
    this.images[0] = 'assets/img/recoleccion1.png';
    this.images[1] = 'assets/img/recoleccion2.png';
    this.images[2] = 'assets/img/recoleccion3.png';
    this.images[3] = 'assets/img/recoleccion4.png';
    this.images[4] = 'assets/img/recoleccion5.png';
    this.images[5] = 'assets/img/recoleccion6.png';
   }

  ngOnInit(): void {
  }

}
