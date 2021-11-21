import {Routes} from "@angular/router";

export const routes: Routes = [
  {path: 'list', loadChildren:() => import('./list/list.module').then(m => m.ListModule)},
  {path: 'create', loadChildren:() => import('./create/create.module').then(m => m.CreateModule)},
  {
    path: '',
    pathMatch: 'full', //default
    redirectTo: 'create'
  }
];
