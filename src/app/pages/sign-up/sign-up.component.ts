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
  // All form fields are initialized to empty strings
  fullName: string = '';
  email: string = '';
  nationalId: string = '';
  department: string = '';
  phone: string = '';
  jobTitle: string = '';
  password: string = '';
  confirmPassword: string = '';

  // Button properties
  buttonType: 'submit' = 'submit';
  buttonClass: string = 'blue-button';
  text: string = 'قم بالتسجيل';

  // Handle form submission
  onSubmit(registrationForm: NgForm) {
    if (registrationForm.valid) {
      console.log('Form Submitted', registrationForm.value);
      // Handle form submission logic here
      registrationForm.reset();
    }
  }
}
