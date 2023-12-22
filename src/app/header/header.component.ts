import { Component, ElementRef, OnInit, Renderer2 } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { Router, NavigationEnd } from '@angular/router';
import { Location } from '@angular/common';
import { LoaderService } from '../loader.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  username: string = 'User';
  currentTime: Date = new Date();
  homeData: string = '';
  isAboutClicked:boolean=false;
  activeItem: string | null = null;
  
  
  constructor(private location: Location, private authService: AuthServiceService, private router: Router, private renderer: Renderer2, private el: ElementRef, private loaderService : LoaderService) {
  }

  Title ="PENNANT";
   ngOnInit(): void {
     // Update the current time every second
     setInterval(() => {
      this.currentTime = new Date();
    }, 1000);

    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.updateActiveItem();
      }
    });

  }
  
  updateActiveItem() {//to make the respective page navigating button to be applied with styles
    const url = this.router.url;

    if (url.includes('/home')) {
      this.activeItem = 'home';
    } else if (url.includes('/product')) {
      this.activeItem = 'product';
    } else if (url.includes('/leader')) {
      this.activeItem = 'leader';
    } else if (url.includes('/contact')) {
      this.activeItem = 'contact';
    } else if (url.includes('/bodylevel')) {
      this.activeItem = 'more';
    } else {
      this.activeItem = null;
    }

    // Check for the About dropdown
    this.isAboutClicked  = url.includes('/ourstory') || url.includes('/company') || url.includes('/partnerShip') || url.includes('/client');
 
  }


  home() {
    this.router.navigate(['/home']);
     console.log('entering into dashboard');
   }

   product(){
    //to navigate into the products page
    this.router.navigate(['/product']);
  }

  leader() {
    const url = this.router.url;
    // Check if the loader is not already visible
    if (!url.includes('/leader')) {
      this.loaderService.showLoader();
  
      // Simulate async operation
      setTimeout(() => {
        this.loaderService.hideLoader();
  
        // Navigate to the leaders page after loading ends
        this.router.navigate(['/leader']);
      }, 1000);
    } else {
      // Navigate to the leaders page directly if the loader is already visible
      this.router.navigate(['/leader']);
    }
  }
  

  contact(){

    const url = this.router.url;
    // Check if the loader is not already visible
    if (!url.includes('/contact')) {
      this.loaderService.showLoader();
  
      // Simulate async operation
      setTimeout(() => {
        this.loaderService.hideLoader();
  
        // Navigate to the contacts page after loading ends
        this.router.navigate(['/contact']);
      }, 1000);
    } else {
      // Navigate to the contacts page directly if the loader is already visible
      this.router.navigate(['/contact']);
    }
    
  }

  more(){
    const url = this.router.url;
    if (!url.includes('/bodylevel')) {
    var loaderElement = document.getElementById("globalLoader");
    if(loaderElement != null || loaderElement != undefined){
      loaderElement.style.display = 'flex';
    }
   //to navigate into the more
  this.router.navigate(['/bodylevel']);
  }
  else{
    this.router.navigate(['/bodylevel']);
  }
}

  onAboutMouseOver():void
  {
    this.isAboutClicked=true;
  }
  
  onAboutMouseOut():void{
    this.isAboutClicked=false;
  }

  toggleAboutDropdown() {
    this.isAboutClicked = !this.isAboutClicked;
  }
  
   log(): boolean {
    return this.authService.getIsLoggedIn();
   }

   signIn() {
     this.router.navigate(['/login']);
     console.log('signout and enter in to login page');
   }

   isLoginPage(): boolean {//this is not make the menu visible when he is in login page
    return this.router.url === '/login';
  }

   signOut(){
    this.authService.setAuthLogin(false);
    this.router.navigate(['/home']);
   }

   // Function to go back
   goBack(): void {
    this.location.back();
  }


}
