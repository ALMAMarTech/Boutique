import { Component, OnInit } from '@angular/core';
import {OwlOptions} from "ngx-owl-carousel-o";

@Component({
  selector: 'app-planes-de-inversion',
  templateUrl: './planes-de-inversion.component.html',
  styleUrls: ['./planes-de-inversion.component.css']
})
export class PlanesDeInversionComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
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
        items:1.3,
        loop:true,
        autoHeight:true,
        autoplay: false,
        navSpeed:1400,
      },
      400:{
        items:1.5,
        loop:true,
        autoHeight:true,
        responsiveRefreshRate:1000,
        autoplay: true
      },
      700:{
        items:1.5,
        loop: true,
        autoHeight:true
      },
      1000:{
        items: 1.5,
        autoHeight: true
      },
      1400:{
        items:1.5,
        autoHeight: true
      },
      1900:{
        items:1.5
      }
    }
  }
  customOption1:  OwlOptions={
    loop: false,
    center:true,
    autoplay: false,
    mouseDrag: true,
    touchDrag: true,
    pullDrag: true,
    dots: false,
    dotsEach: true,
    navSpeed: 1400,
    navText:['<i class="fas fa-arrow-left mx-4  color"></i>','<i class="fas fa-arrow-right  color"></i>'],
    responsive:{
      0:{
        items:1.3,
        loop:false,
        autoHeight:true,
        autoplay: false,
        navSpeed:1400,
      },
      400:{
        items:1.5,
        loop:false,
        autoHeight:true,
        responsiveRefreshRate:1000,
        autoplay: true
      },
      700:{
        items:1.5,
        loop: false,
        autoHeight:true
      },
      1000:{
        items: 1.5,
        autoHeight: true
      },
      1400:{
        items:1.5,
        autoHeight: true
      },
      1900:{
        items:1.5
      }
    }
  }
  customOption2:  OwlOptions={
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
        items:1.3,
        loop:false,
        autoHeight:true,
        autoplay: false,
        navSpeed:1400,
      },
      400:{
        items:1.5,
        loop:false,
        autoHeight:true,
        responsiveRefreshRate:1000,
        autoplay: true
      },
      700:{
        items:1.5,
        loop: false,
        autoHeight:true
      },
      1000:{
        items: 1.5,
        autoHeight: true
      },
      1400:{
        items:1.5,
        autoHeight: true
      },
      1900:{
        items:1.5
      }
    }
  }
}
