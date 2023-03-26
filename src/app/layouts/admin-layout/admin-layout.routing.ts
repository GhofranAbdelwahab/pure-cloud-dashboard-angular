import { Routes } from '@angular/router';

import { ReservationComponent } from '../../pages/reservation/reservation.component';
import { UserProfileComponent } from '../../pages/user-profile/user-profile.component';
import { TablesComponent } from '../../pages/tables/tables.component';
import { ReservationListComponent } from '../../pages/reservation-list/reservation-list.component';
import { TablesUserComponent } from '../../pages/tables-user/tables-user.component';


export const AdminLayoutRoutes: Routes = [
    { path: 'user-profile',   component: UserProfileComponent },
    { path: 'tables',         component: TablesComponent },
    { path: 'reservation',     component: ReservationComponent },
    { path: 'reservation-list',     component: ReservationListComponent },
    { path: 'tables-user',     component: TablesUserComponent }
];
