import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-release-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './release-form.component.html',
  styleUrls: ['./release-form.component.css']
})
export class ReleaseFormComponent {
  // Form fields
  directorName: string = '';
  employeeName: string = '';
  department: string = '';
  reason: string = '';
  position: string = '';  // Radio buttons for confirmation

  // Table rows for clearance process, with dynamic data structure
  tableRows = [
    { date: '', notes: '', name: '', position: '' },
    { date: '', notes: '', name: '', position: '' },
    { date: '', notes: '', name: '', position: '' },
    { date: '', notes: '', name: '', position: '' },
    { date: '', notes: '', name: '', position: '' },
    { date: '', notes: '', name: '', position: '' }
  ];

  // Method to handle form submission
  onSubmit(clearanceForm: NgForm) {
    if (clearanceForm.valid) {
      console.log('Form Submitted', {
        directorName: this.directorName,
        employeeName: this.employeeName,
        department: this.department,
        reason: this.reason,
        tableRows: this.tableRows
      });
      clearanceForm.reset();
    } else {
      console.error('Form is invalid');
    }
  }
}