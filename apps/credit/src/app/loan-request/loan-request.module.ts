import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRequestRoutingModule } from './loan-request-routing.module';
import { LoanRequestComponent } from './loan-request.component';


@NgModule({
  declarations: [
    LoanRequestComponent
  ],
  imports: [
    CommonModule,
    LoanRequestRoutingModule
  ]
})
export class LoanRequestModule { }
