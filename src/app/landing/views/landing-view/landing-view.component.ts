import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing-view',
  templateUrl: './landing-view.component.html',
  styleUrls: ['./landing-view.component.scss']
})
export class LandingViewComponent implements OnInit {

  public firstSimpleHero: any;
  public secondSimpleHero: any;

  constructor() { 
    this.firstSimpleHero = {
      contentToLeft: true,
      contentToRight: false,
      backgroundColorGray: false
    };
    this.secondSimpleHero = {
      contentToLeft: false,
      contentToRight: true,
      backgroundColorGray: true
    }
  }

  ngOnInit() {
  }

}
