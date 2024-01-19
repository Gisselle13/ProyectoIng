import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { FormsModule } from '@angular/forms';
import { MatTabsModule } from '@angular/material/tabs';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ConstruccionComponent } from './components/construccion/construccion.component';
import { RouterModule } from '@angular/router';

import { HttpClientModule } from '@angular/common/http'; 
import { NgFileUploadModule } from '@mohuk/ng2-uploader';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SlickCarouselModule } from 'ngx-slick-carousel';
//import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import {  MapsAPILoader,AgmCoreModule } from '@agm/core';
import { NgbCarouselConfig } from '@ng-bootstrap/ng-bootstrap';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { InfoReciclajeComponent } from './components/info-reciclaje/info-reciclaje.component';
import { PuntosReciclajeComponent } from './components/puntos-reciclaje/puntos-reciclaje.component';
import { AgendaRecoleccionComponent } from './components/agenda-recoleccion/agenda-recoleccion.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { EducacionAmbientalComponent } from './components/educacion-ambiental/educacion-ambiental.component';
import { MatMenuModule } from '@angular/material/menu';
import { MatButtonModule } from '@angular/material/button';

@NgModule({
  declarations: [
    AppComponent,
    InicioComponent,
    HeaderComponent,
    FooterComponent,
    ConstruccionComponent,
    InfoReciclajeComponent,
    PuntosReciclajeComponent,
    AgendaRecoleccionComponent,
    EventosComponent,
    EducacionAmbientalComponent,
   
  ],
  imports: [
    NgbModule,
    AppRoutingModule,
    RouterModule,
    BrowserModule,
    HttpClientModule,
    NgFileUploadModule,
    FormsModule,
    BrowserAnimationsModule,
    SlickCarouselModule,
    FlexLayoutModule,
    MatTabsModule,
    MatMenuModule,
    MatButtonModule,
    
    AgmCoreModule.forRoot({
      apiKey: 'AIzaSyBXIsQqLFWjOwIygW2ZaNyaUvg4xcXRnSM',
      libraries: ['places']
    })
    
  ],
  exports:[
    MatMenuModule, BrowserAnimationsModule, MatButtonModule
  ],
  providers: [NgbCarouselConfig],
  bootstrap: [AppComponent]
})
export class AppModule { }
