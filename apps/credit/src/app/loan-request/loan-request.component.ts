import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";

@Component({
  selector: 'poalim-loan-request',
  templateUrl: './loan-request.component.html',
  styleUrls: ['./loan-request.component.scss']
})
export class LoanRequestComponent implements OnInit {
  homepageLink: string;

  constructor(private activatedRoute: ActivatedRoute) {
    this.homepageLink = this.activatedRoute.snapshot.data.homepageLink || '/homepage';
  }

  ngOnInit(): void {
  }

}
