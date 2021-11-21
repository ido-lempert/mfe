import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomepageRoutingModule } from './homepage-routing.module';
import { HomepageComponent } from './homepage.component';
// import {LoansBannerComponent} from "credit/shared/loans-banner/loans-banner.component";


@NgModule({
  declarations: [
    HomepageComponent,
    // LoansBannerComponent
  ],
  imports: [
    CommonModule,
    HomepageRoutingModule
  ]
})
export class HomepageModule { }
