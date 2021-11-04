import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'list', loadChildren:() => import('./list/list.module').then(m => m.ListModule)},
  {path: 'create', loadChildren:() => import('./create/create.module').then(m => m.CreateModule)},
  {
    path: '',
    pathMatch: 'full', //default
    redirectTo: 'create'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MortgageRoutingModule { }
