import { Component } from '@angular/core';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, NgForm } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';
import { DropdownModule } from 'primeng/dropdown';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { CommonModule } from '@angular/common';



@Component({
  selector: 'app-short-vacation-request',
  standalone: true,
  imports: [
    InputGroupModule,
    InputGroupAddonModule,
    FormsModule,
    InputTextModule,
    FloatLabelModule,
    CardModule,
    CalendarModule,
    DropdownModule, 
    ToastModule,
    CommonModule,
  ],
  templateUrl: './short-vacation-request.component.html',
  styleUrls: ['./short-vacation-request.component.css'],
  providers: [MessageService]
})
export class ShortVacationRequestComponent {
  vacationStartDate: Date | undefined;
  vacationDuration: number | undefined;
  remainingBalance: number | undefined;
  selectedVacationType: string = 'short';
  employeeName: string = '';
  vacationPurpose:string = '';
  selectedDepartment: string = ''; 

  // List of departments
  departments: { name: string, code: string }[] = [
    { name: 'الإدارة العامة', code: 'ADM' },
    { name: 'إدارة الموارد البشرية', code: 'HR' },
    { name: 'إدارة المالية', code: 'FIN' },
    { name: 'إدارة تقنية المعلومات', code: 'IT' },
    { name: 'إدارة التسويق', code: 'MKT' },
    { name: 'إدارة المبيعات', code: 'SAL' },
    { name: 'إدارة الإنتاج', code: 'PROD' },
    { name: 'إدارة الجودة', code: 'QUAL' },
    { name: 'إدارة الصيانة', code: 'MAIN' },
    { name: 'إدارة البحث والتطوير', code: 'R&D' },
    { name: 'إدارة العلاقات العامة', code: 'PR' }
  ];
constructor(private messageService: MessageService) {}
  onSubmit(form: NgForm) {
    if (form.valid) {
      this.messageService.add({
        severity: 'success',
        summary: 'تم إرسال الطلب',
        detail: 'تم تقديم طلب الإجازة بنجاح'
      });
    } else {
      this.messageService.add({
        severity: 'error',
        summary: 'خطأ في الطلب',
        detail: 'يرجى تعبئة الحقول بشكل صحيح'
      });
    }
  }
}
