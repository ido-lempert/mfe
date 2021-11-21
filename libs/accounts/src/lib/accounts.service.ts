import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AccountsService {
  private _selectedAccountId: string | undefined;

  private randomNumber(length = 1) {
    const max = length * 10;
    return Math.floor(Math.random() * max);
  }

  get selectedAccountId () {
    if (! this._selectedAccountId) {
      this._selectedAccountId = `${this.randomNumber(2)}-${this.randomNumber(3)}-${this.randomNumber(5)}`;
    }
    return this._selectedAccountId;
  }
}
