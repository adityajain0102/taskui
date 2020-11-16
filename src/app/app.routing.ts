import { Routes, RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard';

import { HomeComponent } from './home';
import { LoginComponent } from './login';
import { RegisterComponent } from './register';
import { AuthGuard } from './_guards';

const appRoutes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard],data: { role: 'user' } },
    { path: 'auditor', component: HomeComponent, canActivate: [AuthGuard],data: { role: 'auditor' }
},

    { path: 'login', component: LoginComponent },
    { path: 'register', component: RegisterComponent },

    // otherwise redirect to home
    { path: '**', redirectTo: '' }
];

export const routing = RouterModule.forRoot(appRoutes);