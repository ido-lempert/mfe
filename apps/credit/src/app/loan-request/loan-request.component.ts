import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {AccountsService} from "@poalim/accounts";

@Component({
  selector: 'poalim-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.scss']
})
export class LoanRequestComponent implements OnInit {
  homepageLink: string;
  accountId: string;

  constructor(private activatedRoute: ActivatedRoute, private accountsService: AccountsService) {
    this.homepageLink = this.activatedRoute.snapshot.data.homepageLink || '/homepage';
    this.accountId = accountsService.selectedAccountId;
  }

  ngOnInit(): void {
  }

}
