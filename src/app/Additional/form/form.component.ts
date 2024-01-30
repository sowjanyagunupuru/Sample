import { Component,  EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { PartnerService } from 'src/app/partner.service';
import { FormBuilder, FormGroup, Validators,} from '@angular/forms';     
import { BsModalService , ModalOptions } from 'ngx-bootstrap/modal';// to show the alert as a modal for success and error
import { AlertComponent } from 'src/app/Additional/alert/alert.component';
import { MatDialogRef } from '@angular/material/dialog';



@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})
export class FormComponent implements OnInit {
  
  registrationForm!: FormGroup;
  becomePartnerForm : boolean = false;

  constructor(

    private router: Router, private authService: AuthServiceService, private partner: PartnerService, private fb: FormBuilder, private modal: BsModalService) { }
 

  ngOnInit(): void {
    const url = this.router.url;
    // Check if the loader is not already visible
    if (url.includes('/becomePartner')) {
      this.becomePartnerForm = true;
    }
    this.createForm();
  }
  showPassword: boolean = false; //to show the password

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
  }
  showForm = false; // to check this whether to show registration form or 
  username: string = '';
  name: string = '';
  contact: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  consent : boolean = false;
  robotCheckbox : boolean =  false;
  check : boolean =  false;
  message: string = '';
  errorMessage: string = '';
  userNameErrorMessage: string = '';
  passwordErrorMessage: string = '';
  nameErrorMessage: string = '';
  contactErrorMessage: string = '';
  emailErrorMessage: string = '';


  createForm(): void {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required,  Validators.pattern(/^[a-zA-Z0-9@#]+$/),]],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/),]],  
      jobTitle: ['', [Validators.required]],
      company: ['', [Validators.required]],
      contact: ['',  [ Validators.required, Validators.pattern(/^[6-9]\d{9}$/),
      Validators.maxLength(10),   ], ],// Starts with 6, 7, 8, or 9, followed by 9 digits and / Restrict to a maximum of 10 digits
      email: ['', [Validators.required, Validators.pattern(/^(?!.*\.{2})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/), Validators.pattern(/^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/),
      Validators.pattern(/^[a-zA-Z0-9]+(\.[a-zA-Z0-9])*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) ]],
                                      
      password: [ '', [ Validators.required, Validators.minLength(8), Validators.maxLength(15), // Maximum length of 15 characters and Minimum length of 8 characters
              Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/), ], ],// Requires at least one lowercase, one uppercase, one digit, and one special character
      gender: ['', [Validators.required]],
      consent: [false, Validators.required],
    });


    this.registrationForm.get('username')!.valueChanges.subscribe(value => {
        console.log('Username value:', value);
      // Remove characters that are not letters, numbers, @, or #
      const sanitizedValue = value.replace(/[^a-zA-Z0-9@#]/g, '');
    
      // Trim to a maximum length
      if (sanitizedValue.length > 15) {
        this.registrationForm.get('username')!.setValue(sanitizedValue.slice(0, 15), { emitEvent: false });
      } else {
        this.registrationForm.get('username')!.setValue(sanitizedValue, { emitEvent: false });
      }
    });

    
    this.registrationForm.get('name')!.valueChanges.subscribe(value => {
      console.log('name value:', value);

       // Allow only alphabets and spaces
        const sanitizedValue = value.replace(/[^a-zA-Z ]/g, '');
        console.log('sanitizedValue :', sanitizedValue);
      // Trim to a maximum length
      if (sanitizedValue.length > 40) {
        this.registrationForm.get('name')!.setValue(sanitizedValue.slice(0, 40), { emitEvent: false });
      } else {
        this.registrationForm.get('name')!.setValue(sanitizedValue, { emitEvent: false });
      }
    });
    
    this.registrationForm.get('company')!.valueChanges.subscribe(value => {
      console.log('company value:', value);

       // Allow only alphabets and spaces
        const sanitizedValue = value.replace(/[^a-zA-Z ]/g, '');
        console.log('sanitizedValue :', sanitizedValue);
      // Trim to a maximum length
      if (sanitizedValue.length > 40) {
        this.registrationForm.get('company')!.setValue(sanitizedValue.slice(0, 40), { emitEvent: false });
      } else {
        this.registrationForm.get('company')!.setValue(sanitizedValue, { emitEvent: false });
      }
    });

    this.registrationForm.get('jobTitle')!.valueChanges.subscribe(value => {
      console.log('jobTitle value:', value);

       // Allow only alphabets and spaces
        const sanitizedValue = value.replace(/[^a-zA-Z ]/g, '');
        console.log('sanitizedValue :', sanitizedValue);
      // Trim to a maximum length
      if (sanitizedValue.length > 40) {
        this.registrationForm.get('jobTitle')!.setValue(sanitizedValue.slice(0, 40), { emitEvent: false });
      } else {
        this.registrationForm.get('jobTitle')!.setValue(sanitizedValue, { emitEvent: false });
      }
    });

    this.registrationForm.get('contact')!.valueChanges.subscribe(value => {
     console.log('contact value:', value);

      // Allow only numeric characters
      const sanitizedValue = value.replace(/[^0-9]/g, '');
      console.log('sanitizedValue :', sanitizedValue);

      // Trim to a maximum length
      const trimmedValue = sanitizedValue.slice(0, 10);
      console.log('trimmedValue :', sanitizedValue);

      // Update the form control value only if it has changed
      if (sanitizedValue !== trimmedValue) {
        this.registrationForm.get('contact')!.setValue(trimmedValue, { emitEvent: false });
      }
      else{
        this.registrationForm.get('contact')!.setValue(sanitizedValue, { emitEvent: false });
      }
    });
    
    
    this.registrationForm.get('password')!.valueChanges.subscribe(value => {
      // Trim to a maximum length
      if (value.length > 15) {
        this.registrationForm.get('password')!.setValue(value.slice(0, 15), { emitEvent: false });
      }
    });

  }

  onRegistration() {
    this.registrationForm.markAllAsTouched();
    
    // Check if the robot checkbox is checked
    if (!this.showCheck) {
      console.log('Please confirm you\'re not a robot.');
      alert('Please confirm you are not a robot by checking the box.');
    }// Check if the consent checkbox is not checked
    else if (!this.registrationForm.get('consent')?.value) {
      console.log('Checkbox is not selected');
      // Display a pop-up or show an error message
      alert('Please consent to receive emails by checking the box.');
    } else if (this.registrationForm.valid) {
      console.log('Form is valid');
    
      const formValue = this.registrationForm.value;  
      this.partner.name = formValue.name;
      this.partner.username = formValue.username;
      this.partner.jobTitle = formValue.jobTitle;
      this.partner.company = formValue.company;
      this.partner.contact = formValue.contact;
      this.partner.email = formValue.email;
      this.partner.password = formValue.password;
      this.partner.gender = formValue.gender;
      this.partner.consent = formValue.consent;
  
      this.message = this.onRegister(this.partner);
    
      console.log('Form submitted:', this.registrationForm.value);
    } else {
      console.log('Form is invalid');
      this.registrationForm.markAllAsTouched(); // Mark all fields as touched to display error messages
    }
  }
  

  onRegister(partner : PartnerService): any {
    this.authService.register(partner).subscribe(
      (response) => {
        const messageType = 'success';
        console.log('Registration successful:', response);
        this.resetForm();//reset the form and clear the error messages 
        this.message = response; // Assign the response to the appropriate variable

      const  data: ModalOptions ={ //to show alert using alert component
        initialState:{
          message: this.message,
          messageType: messageType
          }
        };
         this.modal.show(AlertComponent,data);
      },
      (error) => {
            console.error('Registration failed:', error);  
        
        const data: ModalOptions = {
          initialState: {
            message: error.error,
            messageType: 'error'
          }
        };
        this.modal.show(AlertComponent, data);
      }
    );
  }
    
  close(){ // to close the register form
    this.showForm = false;
    this.resetForm() ;
    this.formClosed.emit(false); 
    console.log("called form?")
    // Emitting the event with the new value of showForm || this is for normal form and for the modal to close when the close button is clicked 
                                                                                           
  }

  @Output() formClosed = new EventEmitter<boolean>();  //for passing the value to the parent who calls the form 

  resetForm(): void {
    this.registrationForm.reset(); // Resets form values
    this.registrationForm.markAsPristine(); // Marks the form as pristine | Original
    this.registrationForm.markAsUntouched(); // Marks the form as untouched
    this.showSpinner = false;//to make the robotcheckbox reappear;
    this.showCheck = false;// robot check box reappears on these two variables false
  }

  showSpinner = false; //to show the spinner on click on robotcheck box
  showCheck = false; // to show tick on check

  onCheckboxClick() { // onclick method for the robot check box to show spinner
    this.showSpinner = true;
    setTimeout(() => {
      this.showSpinner = false;
      this.showCheck = true;
    }, 1000);

  }
}
