import { Component, OnInit } from '@angular/core';
import {AccountsService} from "@poalim/accounts";

@Component({
  selector: 'poalim-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent implements OnInit {
  accountId: string;

  constructor(private accountsService: AccountsService) {
    this.accountId = accountsService.selectedAccountId;
  }

  ngOnInit(): void {
  }

}
