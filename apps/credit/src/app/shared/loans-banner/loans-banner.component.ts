import {Component, ComponentFactoryResolver, OnInit, ViewContainerRef} from '@angular/core';

// import {HomepageComponent} from "rb/homepage.component";

@Component({
  selector: 'poalim-loans-banner',
  templateUrl: './loans-banner.component.html',
  styleUrls: ['./loans-banner.component.scss']
})
export class LoansBannerComponent implements OnInit {

  constructor(              private viewContainerRef: ViewContainerRef,
                            private componentFactoryResolver: ComponentFactoryResolver) {
    // const comp = this.componentFactoryResolver.resolveComponentFactory(LoansBannerComponent);
    // viewContainerRef.createComponent(comp);
  }

  ngOnInit(): void {
  }

}
