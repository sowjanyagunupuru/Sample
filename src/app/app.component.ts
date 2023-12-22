import { Component, OnInit, AfterViewInit, HostListener } from '@angular/core';
import { AuthServiceService } from './auth-service.service';
import { Router, NavigationEnd  } from '@angular/router';
import { ViewportScroller } from '@angular/common';
import { LoaderService } from './loader.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Sample';

  constructor(private router: Router , private authService: AuthServiceService,private loaderService: LoaderService,  private viewportScroller: ViewportScroller) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]); // Scrolls to the top when navigation ends
      }
    });
  }

  scrollToTop() {
    this.viewportScroller.scrollToPosition([0, 0]);
  }


  loadContent() {
    this.loaderService.showLoader();

    // Simulate loading different components
    setTimeout(() => {
      // Component 1 loaded
      this.loaderService.hideLoader();
    }, 2000);

    setTimeout(() => {
      // Component 2 loaded
      this.loaderService.hideLoader();
    }, 2000);
  }
}