import { Component, Inject, OnInit } from '@angular/core';
import { FormGroup} from '@angular/forms';     
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-modal-display',
  templateUrl: './modal-display.component.html',
  styleUrls: ['./modal-display.component.scss']
})
export class ModalDisplayComponent implements OnInit {
  showForm: boolean = false;

  constructor(public dialogRef: MatDialogRef<ModalDisplayComponent>, @Inject(MAT_DIALOG_DATA) public data: { registrationForm: FormGroup }, //for modal 
  ) { }

    ngOnInit(): void {
    }

    // Event handler for form component on click on close 
    handleFormClosed(showForm: boolean) {
      console.log("modal called")
      this.dialogRef.close();
      this.showForm = showForm;
    }
}
