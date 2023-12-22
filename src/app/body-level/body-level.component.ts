import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-body-level',
  templateUrl: './body-level.component.html',
  styleUrls: ['./body-level.component.scss']
})
export class BodyLevelComponent implements OnInit {

  option: string = ''; // Initialize with a default value or handle accordingly
  isSidebarCollapsed: boolean = false;//for sidemenu collapse

  constructor(private route: ActivatedRoute, private router: Router, private authService: AuthServiceService ) {
    this.createImagePairs();
    this.createClientImagePairs();
  }

  ngOnInit(): void {
    //to show the loader 
    this.timer();
  }

  timer(){
    setTimeout(() => {
      var loaderElement = document.getElementById("globalLoader");
      if(loaderElement != null || loaderElement != undefined){
        loaderElement.style.display = 'none';
      }
    }, 1000);
  }

ngAfterViewInit()
{
    // this.authService.hide();
  }
 
  handleSelectedOption(value: string) {//to get the selected option from the sidemenu
    this.option = value;
  }

  images = [
    'assets/images/dashboard/fintech.jpg',
    'assets/images/dashboard/business-growth-strategy-planing.jpg',
    'assets/images/dashboard/business-growth-strategy-planing.jpg',
    'assets/images/dashboard/Overview_pic.jpg',
    'assets/images/dashboard/Overview_pic.jpg',
    'assets/images/dashboard/collaboration.png',
    'assets/images/dashboard/collaboration.png',
    'assets/images/dashboard/fintech.jpg'
  ];

  imagepair:string[]=[];


  createImagePairs() {
  for (let i = 0; i < this.images.length - 1; i++) {
    this.imagepair.push( this.images[i]);
    this.imagepair.push(this.images[i + 1]);
  }
}

clientImages = [
  '/assets/images/clients/avanse.png',
  '/assets/images/clients/bajaj.png',
  '/assets/images/clients/bank of cyprus.png',
  '/assets/images/clients/emirates.png',
  '/assets/images/clients/national bank of oman.png',
  '/assets/images/clients/niyogin.png',
  '/assets/images/clients/piramal.png',
  '/assets/images/clients/Auxilo.png',
  '/assets/images/clients/khaleejiCmmercialBank.png',
  '/assets/images/clients/QNB.png',
  '/assets/images/clients/veritas.png',
  '/assets/images/clients/RakBank.png',
  '/assets/images/clients/ahli united Bank.png',
  '/assets/images/clients/Ajman.png',
  '/assets/images/clients/Barwa.png',
  '/assets/images/clients/QIIB.png'
];

clientImagepair:string[]=[];

createClientImagePairs() {
for (let i = 0; i < this.clientImages.length - 1; i++) {
  this.clientImagepair.push( this.clientImages[i]);
  this.clientImagepair.push(this.clientImages[i + 1]);
}
}

}
