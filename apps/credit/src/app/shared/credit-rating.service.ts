import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CreditRatingService {
  limits = 0;

  constructor() { }

  getLimits(){
    if (! this.limits) {
      this.limits = Math.floor(Math.random() * 1000000);
    }

    return this.limits;
  }
}
