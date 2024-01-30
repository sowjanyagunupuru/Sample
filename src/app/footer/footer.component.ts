import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';
import { MatDialog } from '@angular/material/dialog';
import { ModalDisplayComponent } from '../Additional/modal-display/modal-display.component';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  constructor(private authService: AuthServiceService,  private dialog: MatDialog) { }

  ngOnInit(): void {
  }

  showRegistrationForm(){
    const dialogRef = this.dialog.open(ModalDisplayComponent, {
      width: '55%', // Adjust the width as needed 
    });
  }
}
