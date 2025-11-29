import { Routes } from '@angular/router';
import { Login } from './components/login/login';
import { UserHome } from './components/user-home/user-home';
import { Editionmenu } from './components/user-home/editionmenu/editionmenu';
import { Findpeople } from './components/findpeople/findpeople';
import { Messages } from './components/messages/messages';
import { Score } from './components/score/score';

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
    },
    {
        path:'trouverDesPersonnes',
        component:Findpeople
    },
    {
        path: 'messages',
        component:Messages
    },
    {
        path:'score',
        component:Score
    }
];
