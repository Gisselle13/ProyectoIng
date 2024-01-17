import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConstruccionComponent } from './components/construccion/construccion.component'
import { InicioComponent } from './components/inicio/inicio.component'
import { InfoReciclajeComponent } from './components/info-reciclaje/info-reciclaje.component';
import { PuntosReciclajeComponent } from './components/puntos-reciclaje/puntos-reciclaje.component';
import { AgendaRecoleccionComponent } from './components/agenda-recoleccion/agenda-recoleccion.component';
import { EventosComponent } from './components/eventos/eventos.component';
import { EducacionAmbientalComponent } from './components/educacion-ambiental/educacion-ambiental.component';




const routes: Routes = [

   {path: "inicio", component: InicioComponent,},
  { path: "", redirectTo: "/inicio", pathMatch: "full" },
  { path: "login", component: InicioComponent, },
  {path: "construccion", component: ConstruccionComponent},
  { path: '', component: InicioComponent },
  { path: "info-reciclaje", component: InfoReciclajeComponent },
  { path: "puntos-reciclaje", component: PuntosReciclajeComponent },
  { path: "agenda-recoleccion", component: AgendaRecoleccionComponent },
  { path: "eventos", component: EventosComponent },
  { path: "educacion-ambiental", component: EducacionAmbientalComponent },
  ];


@NgModule({
 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
