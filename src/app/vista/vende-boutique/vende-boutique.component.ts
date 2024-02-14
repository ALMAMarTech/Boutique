import { Component, OnInit } from '@angular/core';
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-vende-boutique',
  templateUrl: './vende-boutique.component.html',
  styleUrls: ['./vende-boutique.component.css']
})
export class VendeBoutiqueComponent implements OnInit {

  constructor(private title:Title) { }

  ngOnInit(): void {
    this.title.setTitle('Vende Boutique');
  }

}
