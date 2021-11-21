import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {routes} from "./mortgage-routes";

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MortgageRoutingModule { }
