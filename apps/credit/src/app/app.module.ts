/*
 * This RemoteEntryModule is imported here to allow TS to find the Module during
 * compilation, allowing it to be included in the built bundle. This is required
 * for the Module Federation Plugin to expose the Module correctly.
 * */
import { RemoteEntryModule } from './remote-entry/entry.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'homepage', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)},
  {path: 'loan-request', loadChildren:() => import('./loan-request/loan-request.module').then(m => m.LoanRequestModule)},
  {path: 'mortgage', loadChildren:() => import('./mortgage/mortgage.module').then(m => m.MortgageModule)},
];

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes, { initialNavigation: 'enabledBlocking' }),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
