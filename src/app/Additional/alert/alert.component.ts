import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss']
})
export class AlertComponent implements OnInit {

  constructor() { }
   
  showAlert: boolean = true; // Flag to control the visibility of the alert

  ngOnInit(): void {
  }

 @Input() message: string='';
 @Input() messageType: 'error' | 'success' = 'error'; 

  // Function to close the alert
  closeAlert() {
    this.showAlert = false;
  }

}
