import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-client',
  templateUrl: './client.component.html',
  styleUrls: ['./client.component.scss']
})
export class ClientComponent implements OnInit {

  constructor() {
    this.createImagePairs();
   }

  ngOnInit(): void {
  }

  
  images = [
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

  imagepair:string[]=[];


  createImagePairs() {
  for (let i = 0; i < this.images.length - 1; i++) {
    this.imagepair.push( this.images[i]);
    this.imagepair.push(this.images[i + 1]);
  }
}
}
