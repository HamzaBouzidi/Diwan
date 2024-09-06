import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableModule } from 'primeng/table';
import { HttpClientModule } from '@angular/common/http';
import { InputTextModule } from 'primeng/inputtext';
import { ButtonModule } from 'primeng/button';
import { FormsModule } from '@angular/forms'; // Import FormsModule for ngModel

@Component({
  selector: 'app-vacation-list',
  templateUrl: './vacations-list.component.html',
  standalone: true,
  imports: [CommonModule, TableModule, HttpClientModule, InputTextModule, ButtonModule, FormsModule],
  styleUrls: ['./vacations-list.component.css']
})
export class VacationListComponent {
  // List of employees
  employees = [
    { name: 'محمد علي', vacationDate: new Date('2024-09-10'), vacationDays: 10, profilePicture: 'https://randomuser.me/api/portraits/men/1.jpg', vacationType: 'إجازة قصيرة' },
    { name: 'فاطمة الزهراء', vacationDate: new Date('2024-10-01'), vacationDays: 7, profilePicture: 'https://randomuser.me/api/portraits/women/2.jpg', vacationType: 'إجازة عاجلة' },
    { name: 'أحمد سمير', vacationDate: new Date('2024-11-15'), vacationDays: 14, profilePicture: 'https://randomuser.me/api/portraits/men/3.jpg', vacationType: 'إجازة قصيرة' },
    { name: 'خالد عبد الله', vacationDate: new Date('2024-09-05'), vacationDays: 5, profilePicture: 'https://randomuser.me/api/portraits/men/4.jpg', vacationType: 'إجازة عاجلة' },
    { name: 'سارة ياسين', vacationDate: new Date('2024-12-12'), vacationDays: 12, profilePicture: 'https://randomuser.me/api/portraits/women/3.jpg', vacationType: 'إجازة قصيرة' },
    { name: 'يوسف حمدان', vacationDate: new Date('2024-08-21'), vacationDays: 3, profilePicture: 'https://randomuser.me/api/portraits/men/5.jpg', vacationType: 'إجازة عاجلة' },
    { name: 'هدى جابر', vacationDate: new Date('2024-09-29'), vacationDays: 4, profilePicture: 'https://randomuser.me/api/portraits/women/4.jpg', vacationType: 'إجازة قصيرة' },
    { name: 'عبد الرحمن السيد', vacationDate: new Date('2024-11-20'), vacationDays: 10, profilePicture: 'https://randomuser.me/api/portraits/men/6.jpg', vacationType: 'إجازة عاجلة' },
    { name: 'نورا حسن', vacationDate: new Date('2024-10-15'), vacationDays: 9, profilePicture: 'https://randomuser.me/api/portraits/women/5.jpg', vacationType: 'إجازة قصيرة' },
    { name: 'عمرو جمال', vacationDate: new Date('2024-07-23'), vacationDays: 6, profilePicture: 'https://randomuser.me/api/portraits/men/7.jpg', vacationType: 'إجازة عاجلة' },
    { name: 'ليلى شريف', vacationDate: new Date('2024-08-10'), vacationDays: 8, profilePicture: 'https://randomuser.me/api/portraits/women/6.jpg', vacationType: 'إجازة قصيرة' },
    { name: 'عبد العزيز زين', vacationDate: new Date('2024-09-25'), vacationDays: 10, profilePicture: 'https://randomuser.me/api/portraits/men/8.jpg', vacationType: 'إجازة عاجلة' },
    { name: 'ريم صبري', vacationDate: new Date('2024-11-03'), vacationDays: 7, profilePicture: 'https://randomuser.me/api/portraits/women/7.jpg', vacationType: 'إجازة قصيرة' },
    { name: 'ماهر عادل', vacationDate: new Date('2024-10-18'), vacationDays: 14, profilePicture: 'https://randomuser.me/api/portraits/men/9.jpg', vacationType: 'إجازة عاجلة' },
    { name: 'هالة عبد الرحمن', vacationDate: new Date('2024-09-13'), vacationDays: 11, profilePicture: 'https://randomuser.me/api/portraits/women/8.jpg', vacationType: 'إجازة قصيرة' }
  ];

  // Search term variable
  searchTerm: string = '';

  // Filter function
  get filteredEmployees() {
    return this.employees.filter(employee =>
      employee.name.includes(this.searchTerm) ||
      employee.vacationType.includes(this.searchTerm)
    );
  }
}
