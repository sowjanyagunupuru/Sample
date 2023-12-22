import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';
import { UserService } from 'src/app/user.service';
import { FormBuilder, FormGroup, Validators, AbstractControl, ValidatorFn} from '@angular/forms';     
import { BsModalService , ModalOptions } from 'ngx-bootstrap/modal';
import { AlertComponent } from 'src/app/Additional/alert/alert.component';


@Component({
  selector: 'app-become-partner',
  templateUrl: './become-partner.component.html',
  styleUrls: ['./become-partner.component.scss']
})
export class BecomePartnerComponent implements OnInit {

  registrationForm!: FormGroup;
  
  constructor(private router: Router, private authService: AuthServiceService, private user: UserService, private fb: FormBuilder, private modal: BsModalService) { }
 
  ngOnInit(): void {
    this.createForm();
  }


  

  showForm = false; // to check this whether to show registration form or 
  username: string = '';
  name: string = '';
  contact: string = '';
  email: string = '';
  password: string = '';
  gender: string = '';
  message: string = '';
  errorMessage: string = '';
  userNameErrorMessage: string = '';
  passwordErrorMessage: string = '';
  nameErrorMessage: string = '';
  contactErrorMessage: string = '';
  emailErrorMessage: string = '';

  showRegistrationForm() { //to show the registration form
    this.showForm = true;
  }

  createForm(): void {
    this.registrationForm = this.fb.group({
      username: ['', [Validators.required,  Validators.pattern(/^[a-zA-Z0-9@#]+$/),]],
      name: ['', [Validators.required, Validators.pattern(/^[a-zA-Z ]*$/),]],  

      contact: ['',  [ Validators.required, Validators.pattern(/^[6-9]\d{9}$/),

      Validators.maxLength(10),   ], ],// Starts with 6, 7, 8, or 9, followed by 9 digits and / Restrict to a maximum of 10 digits
      email: ['', [Validators.required, Validators.pattern(/^(?!.*\.{2})[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/), Validators.pattern(/^[a-zA-Z0-9._%+-]{3,}@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/),
      Validators.pattern(/^[a-zA-Z0-9]+(\.[a-zA-Z0-9])*@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/) ]],
                                      
      password: [ '', [ Validators.required, Validators.minLength(8), Validators.maxLength(15), // Maximum length of 15 characters and Minimum length of 8 characters
              Validators.pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]+$/), ], ],// Requires at least one lowercase, one uppercase, one digit, and one special character
      gender: ['', [Validators.required]],
    });


    this.registrationForm.get('username')!.valueChanges.subscribe(value => {
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
       // Allow only alphabets and spaces
        const sanitizedValue = value.replace(/[^a-zA-Z ]/g, '');
      // Trim to a maximum length
      if (sanitizedValue.length > 40) {
        this.registrationForm.get('name')!.setValue(sanitizedValue.slice(0, 40), { emitEvent: false });
      } else {
        this.registrationForm.get('name')!.setValue(sanitizedValue, { emitEvent: false });
      }
    });

    this.registrationForm.get('contact')!.valueChanges.subscribe(value => {
      const sanitizedValue = value.replace(/[^\d]/g, ''); // Remove non-numeric characters
    
      // Trim to a maximum length
      if (sanitizedValue.length > 10) {
        this.registrationForm.get('contact')!.setValue(sanitizedValue.slice(0, 10), { emitEvent: false });
      } else {
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
    if (this.registrationForm.valid) {
      console.log('Form is valid');
      
        const formValue = this.registrationForm.value;  
        this.user.name = formValue.name;
        this.user.username = formValue.username;
        this. user.contact = formValue.contact;
        this.user.email = formValue.email;
        this.user.password = formValue.password;
        this.user.gender = formValue.gender;

        this.message = this.onRegister(this.user);
      
      console.log('Form submitted:', this.registrationForm.value);
    } else {
      console.log('Form is invalid');
      this.registrationForm.markAllAsTouched(); // Mark all fields as touched to display error messages
    }
   
  }

  onRegister(user : UserService): any {
    this.authService.register(user).subscribe(
      (response) => {
        const messageType = 'success';
        console.log('Registration successful:', response);
        this.resetForm();//reset the form and clear the error messages 
        this.message = response; // Assign the response to the appropriate variable
      const  data: ModalOptions ={ initialState:{
        message: this.message,
        messageType: messageType}
        }
         this.modal.show(AlertComponent,data);
      },
      (error) => {
        console.error('Registration failed:', error);
        if (error.status === 409) {
          // Handle duplicate entry error
          this.errorMessage = 'Duplicate USERNAME OR EMAIL entry, please try a different value';
        } else {
          // Handle other errors
          this.errorMessage = 'Registration Failed, Try again';
        }  
        const data: ModalOptions = {
          initialState: {
            message: this.errorMessage,
            messageType: 'error'
          }
        };
  
        this.modal.show(AlertComponent, data);
      }
    );

  }
    
  cLose(){ // to close the register form
    this.showForm = false;
    this.resetForm() ;
  }

  resetForm(): void {
    this.registrationForm.reset(); // Resets form values
    this.registrationForm.markAsPristine(); // Marks the form as pristine
    this.registrationForm.markAsUntouched(); // Marks the form as untouched
  }
}


