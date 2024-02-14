import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-celestun',
  templateUrl: './celestun.component.html',
  styleUrls: ['./celestun.component.css']
})
export class CelestunComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
  this.title.setTitle("Boutique Ecochic Town Celestún");
  }

}
