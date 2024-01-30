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
  isAboutHover:boolean=false;

  constructor(private router: Router , private authService: AuthServiceService,private loaderService: LoaderService,  private viewportScroller: ViewportScroller) {
    this.router.events.subscribe(event => {
      if (event instanceof NavigationEnd) {
        this.viewportScroller.scrollToPosition([0, 0]); // Scrolls to the top when navigation ends
      }
    });
  }

  isLoading: boolean = false;
  //to make the page overlay while the loader runs
  ngOnInit() {
    this.loaderService.loaderVisible$.subscribe((isVisible) => {
      this.isLoading = isVisible;
    });
  }

  loadContent() {// to load the content of the page by showing the loader
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


  isButtonVisible: boolean = false;
  //to stop the visibility of the scrollToTop button at the initial position of the page
    @HostListener('window:scroll', ['$event'])
    onWindowScroll() {
      // Set a scroll threshold, adjust as needed
      const scrollThreshold = 200;
  
      // Check the scroll position
      if (window.pageYOffset > scrollThreshold) {
        this.isButtonVisible = true;
      } else {
        this.isButtonVisible = false;
      }
    }
    
  scrollToTop() {//to move to top of the page
    this.viewportScroller.scrollToPosition([0, 0]);
    this.isAboutHover = !this.isAboutHover;
  }
 
}