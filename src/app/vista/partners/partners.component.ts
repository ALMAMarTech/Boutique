import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";
import {gsap} from "gsap";
import ScrollToPlugin from "gsap/ScrollToPlugin";
import ScrollTrigger from "gsap/ScrollTrigger";
import {Title} from "@angular/platform-browser";

@Component({
  selector: 'app-partners',
  templateUrl: './partners.component.html',
  styleUrls: ['./partners.component.css']
})
export class PartnersComponent implements OnInit {

  constructor(private title: Title) { }

  ngOnInit(): void {
    let thisElement = this;
    setTimeout(()=>{
      thisElement.slider2();
      thisElement.mouse();
    }, 500);
    this.title.setTitle('Partners');
  }
  customOption:  OwlOptions={
    loop: false,
    center:true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    dotsEach: true,
    navSpeed: 1100,
    responsive:{
      0:{
        items:1,
        autoplay: true,
        loop: true,
        autoHeight: true,
        autoWidth: true,
        dots: true
      },
      400:{
        items:1,
        autoplay: true,
        loop: true,
        autoHeight: true
      },
      700:{
        items:1,
        autoplay: true,
        loop: true,
        autoHeight: true
      },
      1000:{
        items: 1,
        autoHeight: true,
        loop: true
      },
      1400:{
        items:1,
        autoHeight: true
      },
      1900:{
        items:1
      }
    }
  }
  mouse(){
    var cursor = document.querySelector('.cursor'),
      cursorScale = document.querySelectorAll('.cursor-scale'),
      mouseX = 0,
      mouseY = 0
    gsap.to({},0.016,{
      repeat: -1,
      onRepeat: function (){
        gsap.set(cursor,{
          css: {
            left: mouseX,
            top: mouseY
          }
        })
      }
    });
    window.addEventListener('mousemove', function (e){
      mouseY = e.clientY;
      mouseX = e.clientX;
    });
    cursorScale.forEach(link =>{
      link.addEventListener('mouseleave', () =>{
        // @ts-ignore
        cursor.classList.remove('grow');
        // @ts-ignore
        cursor.classList.remove('grow-mini');
      })
      link.addEventListener('mousemove', () =>{
        // @ts-ignore
        cursor.classList.add('grow');
        // @ts-ignore
        if(link.classList.contains('mini')){
          // @ts-ignore
          cursor.classList.add('grow-mini');
          // @ts-ignore
          cursor.classList.remove('grow')
        }
      })
    })
  }
  slider2(){
    gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);
    /* Main navigation */
    let panelsSection = document.querySelector("#panels"),
      panelsContainer = document.querySelector("#panels-container"),
      tween: gsap.core.Tween;
    document.querySelectorAll(".anchor").forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        // @ts-ignore
        let targetElem = document.querySelector(e.target.getAttribute("href")),
          y = targetElem;
        //@ts-ignore
        if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
          // @ts-ignore
          let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
            totalMovement = (panels.length - 1) * targetElem.offsetWidth;
          // @ts-ignore
          y = Math.round(tween.scrollTrigger.start + (targetElem.offsetLeft / totalMovement) * totalScroll);
        }
        gsap.to(window, {
          scrollTo: {
            y: y,
            autoKill: false
          },
          duration: 1
        });
      });
    });

    /* Panels */
    const panels = gsap.utils.toArray("#panels-container .panel");
    // @ts-ignore
    tween = gsap.to(panels, {
      xPercent: -100 * ( panels.length - 1 ),
      ease: "none",
      scrollTrigger: {
        trigger: "#panels-container",
        pin: true,
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: true,
          duration: {min: 0.1, max: 0.1}
        },
        //@ts-ignore
        end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
      }
    });
  }
}
