import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {HomeComponent} from "./vista/home/home.component";
import {BuildingComponent} from "./vista/building/building.component";
import {PartnersComponent} from "./vista/partners/partners.component";
import {ContactoComponent} from "./vista/contacto/contacto.component";
import {CalculadoraComponent} from "./vista/calculadora/calculadora.component";
import {SliderComponent} from "./components/slider/slider.component";
import {SectionComponent} from "./component/section/section.component";
import {AvisoDePrivacidadComponent} from "./component/aviso-de-privacidad/aviso-de-privacidad.component";
import {CancunComponent} from "./vista/cancun/cancun.component";
import {CelestunComponent} from "./vista/celestun/celestun.component";
import {PlanesDeInversionComponent} from "./vista/planes-de-inversion/planes-de-inversion.component";
import {VendeBoutiqueComponent} from "./vista/vende-boutique/vende-boutique.component";

const routes: Routes = [
  {path: '', redirectTo: '/home', pathMatch:'full'},
  {path: 'home', component: HomeComponent, data:{title: 'Boutique'}},
  {path: 'building', component: BuildingComponent, data:{title: 'Building Town Center'}},
  {path: 'partners', component: PartnersComponent, data:{title: 'Partners'}},
  {path: 'contacto', component: ContactoComponent, data:{title: 'Contacto'}},
  {path: 'calculadora', component: CalculadoraComponent, data:{title: 'Calculadora'}},
  {path: 'aviso-de-privacidad', component: AvisoDePrivacidadComponent, data:{title:'Aviso de privacidad'}},
  {path: 'cancun', component: CancunComponent, data:{title: 'Desarrollo Cancún'}},
  {path: 'celestun', component: CelestunComponent, data:{title: 'Celestún'}},
  {path: 'planes', component: PlanesDeInversionComponent, data:{title: 'Planes de inversión'}},
  {path: 'se-boutique', component: VendeBoutiqueComponent, data:{title: 'Vende Boutique'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {scrollPositionRestoration: 'enabled', onSameUrlNavigation:'reload', anchorScrolling:'enabled'})],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const RoutingComponent = [HomeComponent,BuildingComponent,PartnersComponent,ContactoComponent, CalculadoraComponent, AvisoDePrivacidadComponent, CancunComponent, CelestunComponent, PlanesDeInversionComponent, VendeBoutiqueComponent]
