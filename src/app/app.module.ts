import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import {AppRoutingModule, RoutingComponent} from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './vista/home/home.component';
import { BuildingComponent } from './vista/building/building.component';
import { PartnersComponent } from './vista/partners/partners.component';
import { ContactoComponent } from './vista/contacto/contacto.component';
import { MenuComponent } from './cabecera/menu/menu.component';
import { FooterComponent } from './cabecera/footer/footer.component';
import {CarouselModule} from "ngx-owl-carousel-o";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { CalculadoraComponent } from './vista/calculadora/calculadora.component';
import { SliderComponent } from './components/slider/slider.component';
import { SectionComponent } from './component/section/section.component';
import { ModalComponent } from './component/modal/modal.component';
import { ElementComponent } from './cabecera/element/element.component';
import { AvisoDePrivacidadComponent } from './component/aviso-de-privacidad/aviso-de-privacidad.component';
import { CancunComponent } from './vista/cancun/cancun.component';
import { CelestunComponent } from './vista/celestun/celestun.component';
import { PlanesDeInversionComponent } from './vista/planes-de-inversion/planes-de-inversion.component';
import { VendeBoutiqueComponent } from './vista/vende-boutique/vende-boutique.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    RoutingComponent,
    BuildingComponent,
    PartnersComponent,
    ContactoComponent,
    MenuComponent,
    FooterComponent,
    CalculadoraComponent,
    SliderComponent,
    SectionComponent,
    ModalComponent,
    ElementComponent,
    AvisoDePrivacidadComponent,
    CancunComponent,
    CelestunComponent,
    PlanesDeInversionComponent,
    VendeBoutiqueComponent
  ],
    imports: [
        BrowserModule,
      BrowserAnimationsModule,
        AppRoutingModule,
        CarouselModule
    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
