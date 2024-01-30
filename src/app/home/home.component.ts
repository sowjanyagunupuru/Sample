import { Component, OnInit, Renderer2, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { AuthServiceService } from '../auth-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalDisplayComponent } from '../Additional/modal-display/modal-display.component';



@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent  {

  constructor( private router: Router,private authService: AuthServiceService, private dialog: MatDialog) {}


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

   
      showRegistrationForm(){
        const dialogRef = this.dialog.open(ModalDisplayComponent, {
          width: '55%', // Adjust the width as needed 
        });
      }
    }


