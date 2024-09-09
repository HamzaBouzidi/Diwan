import { InputControlService } from './../../services/input-control.service';
import { Component } from '@angular/core';
import { MyButtonComponent } from "../../shared/my-button/my-button.component";
import { FormsModule, NgForm } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FooterComponent } from "../../shared/footer/footer.component";

@Component({
  selector: 'app-sign-up',
  standalone: true,
  imports: [MyButtonComponent, CommonModule, FormsModule, FooterComponent],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.css'
})
export class SignUpComponent {
  // Initialize all form fields to empty strings
  fullName: string = '';
  email: string = '';
  nationalId: string = '';
  department: string = '';
  phone: string = '';
  jobTitle: string = '';
  password: string = '';
  confirmPassword: string = '';

    constructor(private InputControlService: InputControlService) {}  // Inject the service

  // Validation methods using the service
  isFullNameValid(): boolean {
    return this.InputControlService.validateFullName(this.fullName);
  }

  isEmailValid(): boolean {
    return this.InputControlService.validateEmail(this.email);
  }

  isPhoneValid(): boolean {
    return this.InputControlService.validatePhone(this.phone);
  }

  // Other properties...
  buttonType: 'submit' = 'submit';
  buttonClass: string = 'blue-button';
  text: string = 'قم بالتسجيل';

  onSubmit(registrationForm: NgForm) {
    if (registrationForm.valid && this.isFullNameValid() && this.isEmailValid() && this.isPhoneValid()) {
      console.log('Form Submitted', registrationForm.value);
      registrationForm.reset();
    }
  }
}
