import { Component, OnInit } from '@angular/core';
import {gsap} from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

@Component({
  selector: 'app-section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.css']
})
export class SectionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.slider()
  }

  slider(){
    gsap.registerPlugin(ScrollTrigger);
    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      repeat: 0,
      xPercent: -100 * (sections.length - 1),
      ease: "none",
      scrollTrigger: {
        trigger: ".contenedor",
        pin:true,
        scrub: 1,
        snap: 1 / (sections.length - 1),
        // base vertical scrolling on how wide the container is so it feels more natural.
        // @ts-ignore
        end: () => "+=" + document.querySelector(".contenedor").offsetWidth,
        pinSpacing: true,
        markers: true
      }
    });
  }
}
