import {Component,OnInit} from '@angular/core';
import {gsap} from 'gsap';
import {OwlOptions} from "ngx-owl-carousel-o";
@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  ngOnInit() {
    let thisElement = this;
    setTimeout(()=>{
      thisElement.mouse();
    }, 500);
   }
  customOption:  OwlOptions={
    loop: true,
    center:true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: true,
    dotsEach: true,
    navSpeed: 700,
    navText: ['',''],
    responsive:{
      0:{
        items:1
      },
      400:{
        items:1
      },
      700:{
        items:1
      },
      1000:{
        items: 1
      },
      1400:{
        items:1
      },
      1900:{
        items:1
      }
    },nav:true
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


}
