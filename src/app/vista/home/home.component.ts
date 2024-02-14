import {Component, OnDestroy, OnInit} from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";
//@ts-ignore
import AOS from 'aos';
import {Title} from "@angular/platform-browser";
import {async} from "rxjs";
import {ModalService} from "../../component/modal/modal.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit, OnDestroy {

  constructor(private title: Title, private modalService: ModalService
  ) {
    AOS.init();
  }

  ngOnInit(): void {
    let thisElement = this;
    setTimeout(()=>{
      thisElement.slider1();
      thisElement.mouse();
    }, 800);
    this.title.setTitle('Boutique Ecochic Town');
  this.modalService.abrirModal();
  }

  ngOnDestroy(): void {
  this.slider1();
  }
  customOption:  OwlOptions={
    loop: false,
    center:true,
    autoplay: true,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    dotsEach: true,
    navSpeed: 1100,
    navText:['<i class="fas fa-arrow-left mx-4  color"></i>','<i class="fas fa-arrow-right  color"></i>'],
    responsive:{
      0:{
        items:1,
        loop:true,
        autoHeight:true,
        autoplay: false,
        navSpeed:1400,
      },
      400:{
        items:1,
        loop:true,
        autoHeight:true,
        responsiveRefreshRate:1000,
        autoplay: true
      },
      700:{
        items:1,
        loop: true,
        autoHeight:true
      },
      1000:{
        items: 1,
        autoHeight: true
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

  slider1(){gsap.registerPlugin(ScrollToPlugin, ScrollTrigger);

    /* Main navigation */
    let panelsSection = document.querySelector("#panels");
    let  panelsContainer = document.querySelector("#panels-container");
    let  tween: any;
    document.querySelectorAll(".anchor").forEach(anchor => {
      anchor.addEventListener("click", function(e) {
        e.preventDefault();
        //@ts-ignore
        let targetElem = document.querySelector(e.target.getAttribute("href")),
          y = targetElem;
        //@ts-ignore
        if (targetElem && panelsContainer.isSameNode(targetElem.parentElement)) {
          let totalScroll = tween.scrollTrigger.end - tween.scrollTrigger.start,
            totalMovement = (panels.length - 1) * targetElem.offsetWidth;

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
    tween = gsap.to(panels, {
      xPercent: -100 * ( panels.length - 1 ),
      ease: "none",
      scrollTrigger: {
        trigger: "#panels-container",
        pin: true,
        start: "top top",
        scrub: 1,
        snap: {
          snapTo: 1 / (panels.length - 1),
          inertia: false,
          duration: {min: 0.1, max: 0.1}
        },
        //@ts-ignore
        end: () =>  "+=" + (panelsContainer.offsetWidth - innerWidth)
      }
    });
  }
  prueba(){
    let ver = document.getElementById('prueba1'),
        v = document.getElementById('probando'),
      general = document.getElementById('general'),
      complejo = document.getElementById('complejo');
    //@ts-ignore
    ver.style.display ="none";
    //@ts-ignore
    general.style.display ="none";
    //@ts-ignore
    v.style.display = "flex";
    //@ts-ignore
    v.classList.add("animacion");
    //@ts-ignore
    complejo.style.transform = "translateY(-50px)";
    //@ts-ignore
    complejo.classList.add("animacioninversa");

  }
  prueba2(){
    let ver = document.getElementById('prueba2'),
      v = document.getElementById('probando2'),
      x = document.getElementById('probando3'),
      b = document.getElementById('boutique'),
      c = document.getElementById('celestum'),
      complejo = document.getElementById('complejo1'),
      general = document.getElementById('general1');
    //@ts-ignore
    ver.style.display ="none";
    //@ts-ignore
    general.style.display ="none";
    //@ts-ignore
    v.style.display ="block";
    //@ts-ignore
    x.style.display ="block";
    //@ts-ignore
    v.classList.add("animacion");
    //@ts-ignore
    x.classList.add("animacion");
    //@ts-ignore
    complejo.classList.add("animacion");
    //@ts-ignore
    complejo.style.transform = "translateY(-50px)";
    //@ts-ignore
    b.style.transform = "translateY(-50px)";
    //@ts-ignore
    b.classList.add("animacioninversa");
    //@ts-ignore
    c.style.transform = "translateY(-50px)";
    //@ts-ignore
    c.classList.add("animacioninversa");

  }
  prueba4(){
    let ver = document.getElementById('prueba4'),
      v = document.getElementById('probando4'),
      x = document.getElementById('probando5'),
      complejo = document.getElementById('complejo2'),
      general = document.getElementById('general2');
    //@ts-ignore
    ver.style.display ="none";
    //@ts-ignore
    general.style.display ="none";
    //@ts-ignore
    v.style.display ="block";
    //@ts-ignore
    x.style.display ="block";

    //@ts-ignore
    v.classList.add("animacion");
    //@ts-ignore
    x.classList.add("animacion");
    //@ts-ignore
    complejo.style.transform = "translateY(-50px)";
    //@ts-ignore
    complejo.classList.add("animacion");

  }
  prueba5(){
    let ver = document.getElementById('prueba5'),
      v = document.getElementById('probando5');
    //@ts-ignore
    ver.style.display ="none";
    //@ts-ignore
    v.style.display ="flex";
    //@ts-ignore
    v.classList.add("animacion");
  }
  prueba3(){
    let ver = document.getElementById('prueba3'),
      v = document.getElementById('probando3');
    //@ts-ignore
    ver.style.display ="none";
    //@ts-ignore
    v.style.display ="flex";
    //@ts-ignore
    v.classList.add("animacion");
  }
  prueba10(){
    let ver = document.getElementById('prueba10'),
      v = document.getElementById('probando10');
    //@ts-ignore
    ver.style.display ="none";
    //@ts-ignore
    v.style.display ="flex";
    //@ts-ignore
    v.classList.add("animacion");
  }
  prueba6(){
    let ver = document.getElementById('prueba6'),
      v = document.getElementById('probando6');
    //@ts-ignore
    ver.style.display ="none";
    //@ts-ignore
    v.style.display ="flex";
    //@ts-ignore
    v.classList.add("animacion");
  }
  prueba7(){
    let ver = document.getElementById('prueba7'),
      v = document.getElementById('probando7');
    //@ts-ignore
    ver.style.display ="none";
    //@ts-ignore
    v.style.display ="flex";
    //@ts-ignore
    v.classList.add("animacion");
  }
  prueba8(){
    let ver = document.getElementById('prueba8'),
      v = document.getElementById('probando8');
    //@ts-ignore
    ver.style.display ="none";
    //@ts-ignore
    v.style.display ="flex";
    //@ts-ignore
    v.classList.add("animacion");
  }
  prueba9(){
    let ver = document.getElementById('prueba9'),
      v = document.getElementById('probando9');
    //@ts-ignore
    ver.style.display ="none";
    //@ts-ignore
    v.style.display ="flex";
    //@ts-ignore
    v.classList.add("animacion");
  }
  prueba11(){
    let ver = document.getElementById('prueba11'),
      v = document.getElementById('probando11'),
      complejo = document.getElementById('complejo3'),
      general = document.getElementById('general3');
    //@ts-ignore
    ver.style.display ="none";
    //@ts-ignore
   general.style.display ="none";
    //@ts-ignore
    v.style.display ="flex";
    //@ts-ignore
    complejo.style.transform = "translateY(-50px)";
    //@ts-ignore
    v.classList.add("animacion");
    //@ts-ignore
    complejo.classList.add("animacion");
  }
  owner(){
    let ver = document.getElementById('rol'),
      v = document.getElementById('jefe');
    //@ts-ignore
    ver.style.display ="none";
    //@ts-ignore
    v.style.display ="flex";
    //@ts-ignore
    v.classList.add('animacion');
  }

}

