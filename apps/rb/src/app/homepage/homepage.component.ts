import {Component, Inject, Injector, OnInit} from '@angular/core';
import {AccountsService} from "@poalim/accounts";

import {CreditRatingService} from "credit/shared/credit-rating.service";

@Component({
  selector: 'poalim-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  accountId: string;
  creditLimits: number | undefined;

  constructor(private accountsService: AccountsService, private injector: Injector) {
    this.accountId = accountsService.selectedAccountId;
    this.creditLimits = injector.get(CreditRatingService).getLimits();
  }

  ngOnInit(): void {
  }

}
