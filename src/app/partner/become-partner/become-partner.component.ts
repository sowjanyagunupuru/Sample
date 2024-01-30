import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-become-partner',
  templateUrl: './become-partner.component.html',
  styleUrls: ['./become-partner.component.scss']
})
export class BecomePartnerComponent implements OnInit {
  ngOnInit(): void {
  }
  
  showForm = false; // to check this whether to show registration form or 
  BecomePartnerform : boolean = false;
  showRegistrationForm() { //to show the registration form
    this.showForm = true;
    this.BecomePartnerform = true;
  }

  // Event handler for form component on click on close 
  handleFormClosed(showForm: boolean) {
    this.showForm = showForm;
  }
}


