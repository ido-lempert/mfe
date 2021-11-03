import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { RouterModule } from '@angular/router';
import {loadRemoteModule} from "@angular-architects/module-federation";

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      [
        {
          path: 'credit/loan-request',
          // loadChildren: () =>
          //   import('credit/loan-request.module').then((m) => m.LoanRequestModule),
          loadChildren: () => loadRemoteModule({
            remoteEntry: 'http://localhost:4201/remoteEntry.js',
            remoteName: 'credit',
            exposedModule: './loan-request.module'
          }).then(m => m.LoanRequestModule),
        },
      ],
      { initialNavigation: 'enabledBlocking' }
    ),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
