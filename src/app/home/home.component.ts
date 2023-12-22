import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthServiceService } from '../auth-service.service';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor( private router: Router,private authService: AuthServiceService) {}


  slide = [
    {
      title: 'NSRIT',
      image: 'assets/images/institute.jpg',
      alt: 'institute',
    },
    {
      title: 'NSRIT',
      image: 'assets/images/institute2.jpg',
      alt: 'institute',
    },
  ];

  log(): boolean {
    return this.authService.getIsLoggedIn();
   }

   onAddProductClick() {
    if (this.log()) {
      this.router.navigate(['/bodylevel']);
    } else {
      // User is not logged in, so open the login popup
      this.openLoginPopup();
    }
  }

   openLoginPopup() {
  //   // Open the login popup
  //   this.dialog.open(LoginComponent, {
  //     width: '300px', // Setting the width 
  //   });
   }

  }

