import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AccountsService} from "@poalim/accounts";
import {CreditRatingService} from "../shared/credit-rating.service";

@Component({
  selector: 'poalim-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.scss']
})
export class LoanRequestComponent implements OnInit {
  homepageLink: string;
  accountId: string;
  creditLimits: number | undefined;

  constructor(private activatedRoute: ActivatedRoute, private accountsService: AccountsService, private creditRatingService: CreditRatingService) {
    this.homepageLink = this.activatedRoute.snapshot.data.homepageLink || '/homepage';
    this.accountId = accountsService.selectedAccountId;
  }

  ngOnInit(): void {
    this.creditLimits  = this.creditRatingService.getLimits();
  }

}
