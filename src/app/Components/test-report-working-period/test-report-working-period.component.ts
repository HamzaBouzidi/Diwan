import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-test-report-working-period',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './test-report-working-period.component.html',
  styleUrl: './test-report-working-period.component.css'
})
export class TestReportWorkingPeriodComponent {
 // Form fields
  name: string = '';
  jobTitle: string = '';
  nationalNumber: string = '';
  nationality: string = '';
  department: string = '';
  section: string = '';
  startDate: string = '';
  endDate: string = '';

  // Method to handle form submission
  onSubmit(reportForm: NgForm) {
    if (reportForm.valid) {
      console.log('Form Submitted', {
        name: this.name,
        jobTitle: this.jobTitle,
        nationalNumber: this.nationalNumber,
        nationality: this.nationality,
        department: this.department,
        section: this.section,
        startDate: this.startDate,
        endDate: this.endDate
      });
      // Reset form after submission
      reportForm.reset();
    } else {
      console.error('Form is invalid');
    }
  }
}