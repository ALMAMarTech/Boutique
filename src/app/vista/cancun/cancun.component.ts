import { Component, OnInit } from '@angular/core';
import {gsap} from "gsap";
import {ScrollToPlugin} from "gsap/ScrollToPlugin";
import {ScrollTrigger} from "gsap/ScrollTrigger";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-cancun',
  templateUrl: './cancun.component.html',
  styleUrls: ['./cancun.component.css']
})
export class CancunComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {this.title.setTitle('Boutique Ecochic Town Cancún');
}

}
