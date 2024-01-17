import { Component, OnInit, Renderer2, VERSION } from '@angular/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css', './header.scss'],
  providers: [NgbCarouselConfig], // add NgbCarouselConfig to the component providers

})
export class HeaderComponent implements OnInit {

info:any;
  constructor(private render: Renderer2, config: NgbCarouselConfig) {

   }

  ngOnInit(): void {
  }

  btn(tipo: any){
this.info = tipo;
//console.log('tipo:', tipo);
  }
  

}
