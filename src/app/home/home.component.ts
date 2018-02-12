import { Component, OnInit } from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit() {
      $('.carousel.carousel-slider').carousel({
        fullWidth: true

      });
    // Init Carousel
    $('.carousel').carousel();

    // Init Carousel Slider
    $('.carousel.carousel-slider').carousel({fullWidth:true});

    // Fire off toast
    //Materialize.toast('Hello World', 3000);

    // Init Slider
    $('.slider').slider({

    indicators: true,
    "height": $(window).height()
  });

    // Init Modal
    $('.modal').modal();

    // Init Sidenav
    $('.button-collapse').sideNav();
  }

}
