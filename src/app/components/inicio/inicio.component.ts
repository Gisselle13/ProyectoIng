import { Component, OnInit, VERSION } from '@angular/core';
import {ConexionesService} from '../../services/conexiones.service'
import { Router } from '@angular/router';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
//import { slikk } from '../../../assets/js/app.js';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css', './inicio.scss']
})
export class InicioComponent implements OnInit {

  isActive = false;

  name = 'Angular ' + VERSION.major;
  images: any[] = new Array();
  imagesAcopio: any[] = new Array();

        slideConfig1 = {
          slidesToShow: 1,
          slidesToScroll: 1,
          autoplay: true,
          autoplaySpeed: 5000,
          arrows: false,
          dots: false,
          pauseOnHover: false,

        };
  

      slideConfig2 = {
            slidesToShow: 2,
            slidesToScroll: 1,
            autoplay: true,
            autoplaySpeed: 5000,
            arrows: false,
            dots: false,
            pauseOnHover: false,
                             };
   eventos:any
  constructor(private db: ConexionesService, private router: Router, config: NgbCarouselConfig) {
    // customize default values of carousels used by this component tree
    config.interval = 2000;
    config.keyboard = true;
    config.pauseOnHover = true;
    this.images[0] = 'assets/img/slide4.jpg';
    this.images[1] = 'assets/img/slide2.jpg';
    this.images[2] = 'assets/img/slide3.jpg';
    this.images[3] = 'assets/img/slide1.jpg';
    //this.images[4] = 'assets/img/slide4.jpg';

    this.imagesAcopio[0] = 'assets/img/acopio/acopio0.jpg';
    this.imagesAcopio[1] = 'assets/img/acopio/acopio1.jpg';
    this.imagesAcopio[2] = 'assets/img/acopio/acopio2.jpg';
    this.imagesAcopio[3] = 'assets/img/acopio/acopio3.jpg';
    this.imagesAcopio[4] = 'assets/img/acopio/acopio4.jpg';
    this.imagesAcopio[5] = 'assets/img/acopio/acopio5.jpg';
    this.imagesAcopio[6] = 'assets/img/acopio/acopio6.jpg';
   }
      ngOnInit(): void {

        // this.db.getEventos().then((data)=>{
        //   this.eventos = data
        //   console.log(data)
        // })


     
      }
      abreEvento(id){
        this.router.navigate(['/detalle/evento/' + id]);
      }
   
      


}
