import { Component, inject } from '@angular/core';
import { Connexions } from '../../services/connexions';
import { ProfileCard } from "./profile-card/profile-card";
import { Notconnected } from '../notconnected/notconnected';

@Component({
  selector: 'app-user-home',
  imports: [ProfileCard, Notconnected],
  templateUrl: './user-home.html',
  styleUrl: './user-home.css',
})
export class UserHome {
  private connexions = inject(Connexions);

  isConnected():boolean{
    return this.connexions.someoneIsLog;
  }

  getPseudo():string{
    return this.connexions.pseudoOfLog;
  }
}
