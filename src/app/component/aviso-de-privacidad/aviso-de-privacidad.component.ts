import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-aviso-de-privacidad',
  templateUrl: './aviso-de-privacidad.component.html',
  styleUrls: ['./aviso-de-privacidad.component.css']
})
export class AvisoDePrivacidadComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    this.title.setTitle('Aviso de privacidad');
  }

}
