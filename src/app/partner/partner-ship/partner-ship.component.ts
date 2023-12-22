import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-partner-ship',
  templateUrl: './partner-ship.component.html',
  styleUrls: ['./partner-ship.component.scss']
})
export class PartnerShipComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  go(){
    this.router.navigate(['/becomePartner']);
  }

}
