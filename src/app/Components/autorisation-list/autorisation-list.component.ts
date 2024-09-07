import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ButtonModule } from 'primeng/button';
import { InputTextModule } from 'primeng/inputtext';
import { TableModule } from 'primeng/table';

@Component({
  selector: 'app-autorisation-list',
  standalone: true,
  imports: [CommonModule, TableModule, HttpClientModule, InputTextModule, ButtonModule, FormsModule],
  templateUrl: './autorisation-list.component.html',
  styleUrl: './autorisation-list.component.css'
})
export class AutorisationListComponent {
 // List of authorizations
  authorizations = [
    {  authorizationDate: new Date('2024-09-10'), lateDuration: '30 دقيقة', authorizationType: 'إذن تأخر صباحي' },
    { authorizationDate: new Date('2024-10-01'), lateDuration: '15 دقيقة',  authorizationType: 'إذن خروج' },
    // Add more entries as needed
  ];

 // Search term variable (expecting date input as a string)
  searchTerm: string = '';

  // Filter function to search by date
  get filteredAuthorizations() {
    if (!this.searchTerm) {
      return this.authorizations;
    }

    // Convert searchTerm to Date and match it with authorizationDate
    const searchDate = new Date(this.searchTerm);
    
    return this.authorizations.filter(auth => {
      const authDate = new Date(auth.authorizationDate);
      return (
        authDate.getFullYear() === searchDate.getFullYear() &&
        authDate.getMonth() === searchDate.getMonth() &&
        authDate.getDate() === searchDate.getDate()
      );
    });
  }
}
