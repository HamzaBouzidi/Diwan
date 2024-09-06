import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-autorisation-request',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './autorisation-request.component.html',
  styleUrl: './autorisation-request.component.css'
})
export class AutorisationRequestComponent {
// Form fields bound with [(ngModel)]
  employeeName: string = '';
  period: string = '';
  reason: string = '';
  exitDate: string = '';
  exitTime: string = '';
  returnTime: string = '';

  // Departments data for the dropdown (example data)
  departments = [
    { code: 'HR', name: 'الموارد البشرية' },
    { code: 'IT', name: 'تقنية المعلومات' },
    { code: 'FN', name: 'المالية' },
    { code: 'MK', name: 'التسويق' }
  ];
  selectedDepartment: string = '';

  // Vacation types
  selectedVacationType: string = '';

  // Method to handle form submission
  onSubmit(vacationForm: NgForm) {
    if (vacationForm.valid) {
      // Handle form data (send it to a server or use it otherwise)
      console.log('Form Submitted', {
        employeeName: this.employeeName,
        period: this.period,
        reason: this.reason,
        exitDate: this.exitDate,
        exitTime: this.exitTime,
        returnTime: this.returnTime,
        selectedDepartment: this.selectedDepartment,
        selectedVacationType: this.selectedVacationType
      });

      // You can reset the form after submission if needed
      vacationForm.reset();
    }
    }

}
