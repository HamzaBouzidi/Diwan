import { Component } from '@angular/core';
import { MyButtonComponent } from '../../shared/my-button/my-button.component';
import { CommonModule } from '@angular/common';
import { FormsModule, NgForm } from '@angular/forms';
import { FooterComponent } from '../../shared/footer/footer.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [MyButtonComponent, CommonModule, FormsModule, FooterComponent],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  email: string = '';
  password: string = '';

  buttonType: 'submit' = 'submit';
  buttonClass: string = 'blue-button';
  text: string = 'قم بالتسجيل';
    onSubmit(registrationForm: NgForm) {
    if (registrationForm.valid ) {
      console.log('Form Submitted', registrationForm.value);
      registrationForm.reset();
    }
  }

}
