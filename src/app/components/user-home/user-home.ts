import { Component, inject, signal } from '@angular/core';
import { Connexions } from '../../services/connexions';
import { ProfileCard } from "./profile-card/profile-card";
import { Notconnected } from '../notconnected/notconnected';
import { DisplayScores } from '../score/display-scores/display-scores';
import { Fakeparties } from '../../services/fakeparties';
import { Router } from '@angular/router';


@Component({
  selector: 'app-user-home',
  imports: [ProfileCard, Notconnected, DisplayScores],
  templateUrl: './user-home.html',
  styleUrl: './user-home.css',
})
export class UserHome {
  private connexions = inject(Connexions);
  showParties = signal(false);
  fakeParties = inject(Fakeparties);
  router = inject(Router);


  isConnected():boolean{
    return this.connexions.someoneIsLog;
  }

  getPseudo():string{
    return this.connexions.pseudoOfLog;
  }
  toggleModalParties():void{
    this.showParties.set(!this.showParties());
  }

  navigateToEdit() {
    this.router.navigateByUrl('/edit');
  }
}
