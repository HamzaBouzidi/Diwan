import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-member-nomination-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './member-nomination-form.component.html',
  styleUrl: './member-nomination-form.component.css'
})
export class MemberNominationFormComponent {

  // Form fields
  candidateName: string = '';
  nominationEntity: string = '';
  nominationDate: string = '';
  currentJob: string = '';
  joiningDate: string = '';
  qualifications: string = '';
  experience: string = '';
  nationality: string = '';

  // Method to handle form submission
  onSubmit(nominationForm: NgForm) {
    if (nominationForm.valid) {
      console.log('Form Submitted', {
        candidateName: this.candidateName,
        nominationEntity: this.nominationEntity,
        nominationDate: this.nominationDate,
        currentJob: this.currentJob,
        joiningDate: this.joiningDate,
        qualifications: this.qualifications,
        experience: this.experience,
        nationality: this.nationality
      });
      // Reset form after submission
      nominationForm.reset();
    } else {
      console.error('Form is invalid');
    }
  }
}