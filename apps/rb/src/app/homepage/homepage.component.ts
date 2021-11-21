import {Component, ComponentFactoryResolver, Inject, Injector, OnInit, ViewContainerRef} from '@angular/core';
import {AccountsService} from "@poalim/accounts";

import {CreditRatingService} from "credit/shared/credit-rating.service";

import {LoansBannerComponent} from "credit/shared/loans-banner/loans-banner.component";


@Component({
  selector: 'poalim-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  accountId: string;
  creditLimits: number | undefined;

  constructor(private accountsService: AccountsService,
              private injector: Injector,
              private viewContainerRef: ViewContainerRef,
              private componentFactoryResolver: ComponentFactoryResolver,
  ) {
    this.accountId = accountsService.selectedAccountId;
    this.creditLimits = injector.get(CreditRatingService).getLimits();

    const comp = this.componentFactoryResolver.resolveComponentFactory(LoansBannerComponent);
    viewContainerRef.createComponent(comp);
  }

  ngOnInit(): void {
  }

}
