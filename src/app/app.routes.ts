import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { UserHome } from './components/user-home/user-home';

export const routes: Routes = [
    {
        path : '',
        component: Login
    },
    {
        path:'userHome',
        component:UserHome
    }
];
