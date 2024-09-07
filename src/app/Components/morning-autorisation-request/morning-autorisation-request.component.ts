import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
@Component({
  selector: 'app-morning-autorisation-request',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './morning-autorisation-request.component.html',
  styleUrl: './morning-autorisation-request.component.css'
})
export class MorningLateRequestComponent {
  employeeName: string = '';
  latePeriod: string = '';
  reason: string = '';
  date: string = '';
  arrivalTime: string = '';

  
  selectedDepartment: string = '';

  onSubmit(lateRequestForm: NgForm) {
    if (lateRequestForm.valid) {
      // Handle form data (send it to a server or use it otherwise)
      console.log('Form Submitted', {
        employeeName: this.employeeName,
        latePeriod: this.latePeriod,
        reason: this.reason,
        date: this.date,
        arrivalTime: this.arrivalTime,
        selectedDepartment: this.selectedDepartment
      });

      // Optionally reset the form after submission
      lateRequestForm.reset();
    }
  }

}
