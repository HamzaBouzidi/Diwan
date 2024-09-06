import { Routes } from '@angular/router';
import { NationalIdentityCardComponent } from './Components/national-identity-card/national-identity-card.component';
import { VacationsComponent } from './Components/vacations/vacations.component';
import { ShortVacationRequestComponent } from './Components/short-vacation-request/short-vacation-request.component';
import { VacationListComponent } from './Components/vacations-list/vacations-list.component';
import { AutorisationRequestComponent } from './Components/autorisation-request/autorisation-request.component';
import { AutorisationComponent } from './Components/autorisation/autorisation.component';

export const routes: Routes = [
    
    { path: 'dashboard/vacations', component: VacationsComponent },
    { path: 'dashboard/vacations/vacation-request', component: ShortVacationRequestComponent },
    { path: 'dashboard/vacations/vacation-list', component: VacationsComponent },
    { path: 'dashboard/vacations/vacation-management', component: VacationsComponent },
    { path: 'dashboard/vacations/vacations-list', component: VacationListComponent },
    { path: 'dashboard/autorisation/autorisation', component: AutorisationComponent },
    { path: 'dashboard/autorisation/autorisation-request', component: AutorisationRequestComponent },

    { path: '**', component: NationalIdentityCardComponent },

];
