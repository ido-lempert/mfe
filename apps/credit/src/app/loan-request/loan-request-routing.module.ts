import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoanRequestComponent} from "./loan-request.component";

const routes: Routes = [
  {path: '', component: LoanRequestComponent}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoanRequestRoutingModule { }
