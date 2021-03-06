import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {loadRemoteModule} from "@angular-architects/module-federation";

import {routes as routesCreditMortgage} from 'credit/mortgage-routes';
import {TranslateModule, TranslateService} from "@ngx-translate/core";

import translations from '../i18n/he.json';

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    TranslateModule.forRoot({
      defaultLanguage: 'he'
    }),
    RouterModule.forRoot(
      [
        {path: '', loadChildren: () => import('./homepage/homepage.module').then(m => m.HomepageModule)},
        {
          path: 'credit/loan-request',
          data: {
            homepageLink: '/'
          },
          loadChildren: () =>
            import('credit/loan-request.module').then((m) => m.LoanRequestModule),
          // loadChildren: () => loadRemoteModule({
          //   remoteEntry: 'http://localhost:4201/remoteEntry.js',
          //   remoteName: 'credit',
          //   exposedModule: './loan-request.module'
          // }).then(m => m.LoanRequestModule),
        },
        {
          path: 'mortgage',
          children: routesCreditMortgage
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(private translateService: TranslateService) {
    translateService.setTranslation('he', translations);
    translateService.use('he');
  }
}
