import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-reports',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './reports.component.html',
  styleUrl: './reports.component.css'
})
export class ReportsComponent {
  searchTerm: string = '';

  reports = [
    { name: 'محمد أحمد', jobTitle: 'مدير', nationalNumber: '123456789', department: 'الإدارة العامة', startDate: new Date('2023-02-15'), endDate: new Date('2023-08-15') },
    { name: 'سارة خالد', jobTitle: 'مساعد', nationalNumber: '987654321', department: 'قسم الموارد البشرية', startDate: new Date('2023-01-01'), endDate: new Date('2023-06-30') },
    { name: 'علي يوسف', jobTitle: 'محاسب', nationalNumber: '456789123', department: 'الإدارة المالية', startDate: new Date('2023-03-20'), endDate: new Date('2023-09-20') },
    { name: 'هدى منصور', jobTitle: 'مسؤول تقنية', nationalNumber: '654123987', department: 'قسم تقنية المعلومات', startDate: new Date('2023-05-01'), endDate: new Date('2023-11-01') },
    { name: 'إبراهيم حسن', jobTitle: 'مدير مشاريع', nationalNumber: '741852963', department: 'قسم المشاريع', startDate: new Date('2023-04-10'), endDate: new Date('2023-10-10') },
    { name: 'خالد صالح', jobTitle: 'منسق', nationalNumber: '369258147', department: 'الإدارة التنفيذية', startDate: new Date('2023-06-01'), endDate: new Date('2023-12-01') },
    { name: 'نورا علي', jobTitle: 'مدقق مالي', nationalNumber: '852963741', department: 'الإدارة المالية', startDate: new Date('2023-07-01'), endDate: new Date('2024-01-01') },
    { name: 'طارق عماد', jobTitle: 'مدير تقنية', nationalNumber: '147258369', department: 'قسم تقنية المعلومات', startDate: new Date('2023-08-15'), endDate: new Date('2024-02-15') },
    { name: 'ليلى محمد', jobTitle: 'مدير موارد', nationalNumber: '321654987', department: 'قسم الموارد البشرية', startDate: new Date('2023-09-01'), endDate: new Date('2024-03-01') },
    { name: 'عمر سعيد', jobTitle: 'مستشار', nationalNumber: '963852741', department: 'الإدارة العامة', startDate: new Date('2023-10-01'), endDate: new Date('2024-04-01') }
  ];
    // Method to filter reports based on the search term
  get filteredReports() {
    return this.reports.filter((report) => {
      const search = this.searchTerm.toLowerCase();
      return (
        report.name.toLowerCase().includes(search) || 
        report.jobTitle.toLowerCase().includes(search)
      );
    });
  }
}