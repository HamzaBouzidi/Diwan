import { AutorisationListComponent } from './Components/autorisation-list/autorisation-list.component';
import { Routes } from '@angular/router';
import { NationalIdentityCardComponent } from './Components/national-identity-card/national-identity-card.component';
import { VacationsComponent } from './Components/vacations/vacations.component';
import { ShortVacationRequestComponent } from './Components/short-vacation-request/short-vacation-request.component';
import { VacationListComponent } from './Components/vacations-list/vacations-list.component';
import { AutorisationRequestComponent } from './Components/autorisation-request/autorisation-request.component';
import { AutorisationComponent } from './Components/autorisation/autorisation.component';
import { MorningLateRequestComponent } from './Components/morning-autorisation-request/morning-autorisation-request.component';
import { DefinitionsAutorisationsComponent } from './Components/definitions-autorisations/definitions-autorisations.component';
import { ReleaseFormComponent } from './Components/release-form/release-form.component';
import { TestReportWorkingPeriodComponent } from './Components/test-report-working-period/test-report-working-period.component';
import { MemberNominationFormComponent } from './Components/member-nomination-form/member-nomination-form.component';
import { AcknowledgmentPledgeComponent } from './Components/acknowledgment-pledge/acknowledgment-pledge.component';
import { ReportsComponent } from './Components/reports/reports.component';
import { HealthAssuranceComponent } from './Components/health-assurance/health-assurance.component';

export const routes: Routes = [
    
    { path: 'dashboard/vacations', component: VacationsComponent },
    { path: 'dashboard/vacations/vacation-request', component: ShortVacationRequestComponent },
    { path: 'dashboard/vacations/vacation-list', component: VacationsComponent },
    { path: 'dashboard/vacations/vacation-management', component: VacationsComponent },
    { path: 'dashboard/vacations/vacations-list', component: VacationListComponent },
    { path: 'dashboard/autorisation/autorisation', component: AutorisationComponent },
    { path: 'dashboard/autorisation/autorisation-request', component: AutorisationRequestComponent },
    { path: 'dashboard/autorisation/morning-autorisation-request', component: MorningLateRequestComponent },
    { path: 'dashboard/autorisation/autorisation-list', component: AutorisationListComponent},
    { path: 'dashboard/definitions-autorisations', component: DefinitionsAutorisationsComponent},
    { path: 'dashboard/definitions-autorisations/national-identity', component: NationalIdentityCardComponent},
    { path: 'dashboard/definitions-autorisations/release-form', component: ReleaseFormComponent},
    { path: 'dashboard/definitions-autorisations/test-report-for-working-period', component: TestReportWorkingPeriodComponent},
    { path: 'dashboard/definitions-autorisations/member-nomination-form', component: MemberNominationFormComponent},
    { path: 'dashboard/definitions-autorisations/acknowledgment-pledge', component: AcknowledgmentPledgeComponent},
    { path: 'dashboard/definitions-autorisations/reports', component: ReportsComponent},
    { path: 'dashboard/definitions-autorisations/health-assurance', component: HealthAssuranceComponent},


    { path: '**', component: NationalIdentityCardComponent },

];
