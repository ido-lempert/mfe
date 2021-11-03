import { Component } from '@angular/core';
import {NavigationCancel, NavigationEnd, NavigationError, NavigationStart, Router, RouterEvent} from "@angular/router";

@Component({
  selector: 'poalim-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  reties = 0;
  loading = false;
  error = false;

  constructor(private router: Router) {
    this.router.events.subscribe((e ) => {
      this.navigationInterceptor(<RouterEvent> e);
    })
  }

  private navigationInterceptor(event: RouterEvent) {
    if (event instanceof NavigationStart) {
      this.loading = true;
      this.error = false;
    }
    if (event instanceof NavigationEnd) {
      this.loading = false
    }

    // Set loading state to false in both of the below events to hide the spinner in case a request fails
    if (event instanceof NavigationCancel) {
      this.loading = false
    }
    if (event instanceof NavigationError) {
      this.loading = false;
      this.error = true;

      if (this.reties < 3) {
        this.reties++;
        this.router.navigate([event.url]);
      } else {
        this.reties = 0;
      }
    }
  }
}
