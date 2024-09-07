import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-national-identity-card',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './national-identity-card.component.html',
  styleUrls: ['./national-identity-card.component.css'] 
})
export class NationalIdentityCardComponent {

  fullName: string = '';
  personalId: string = '';
  nationalNumber: string = '';
  position: string = ''; // Holds the selected radio button value

  onSubmit(identityForm: NgForm) {
    if (identityForm.valid) {
      console.log('Form Submitted', {
        fullName: this.fullName,
        personalId: this.personalId,
        nationalNumber: this.nationalNumber,
        position: this.position,
      });
      identityForm.reset();
    }
  }
}