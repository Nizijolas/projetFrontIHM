import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { UserHome } from './components/user-home/user-home';
import { Editionmenu } from './components/user-home/editionmenu/editionmenu';

export const routes: Routes = [
    {
        path : '',
        component: Login
    },
    {
        path:'userHome',
        component:UserHome
    },
    {
        path:'edit',
        component:Editionmenu
    }
];
