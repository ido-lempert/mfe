import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoanRequestRoutingModule } from './loan-request-routing.module';
import { LoanRequestComponent } from './loan-request.component';
import {TranslateModule, TranslateService} from "@ngx-translate/core";
import translations from './i18n/he.json';

@NgModule({
  declarations: [
    LoanRequestComponent
  ],
  imports: [
    CommonModule,
    TranslateModule.forChild({
      // isolate: true
    }),
    LoanRequestRoutingModule
  ]
})
export class LoanRequestModule {
  constructor(private translateService: TranslateService) {
    const lang = 'he';
    // translateService.setTranslation(lang, translations);

    const parentTranslations = translateService.translations[lang];
    translateService.setTranslation(lang, Object.assign({}, translations, parentTranslations));

    translateService.use(lang);
  }
}
