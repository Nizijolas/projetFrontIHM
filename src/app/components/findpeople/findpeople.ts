import { Component, inject, output, signal } from '@angular/core';
import { Connexions } from '../../services/connexions';
import { Notconnected } from '../notconnected/notconnected';
import { PeopleCardFind } from './people-card-find/people-card-find';
import { FakePlayer } from '../../services/fake-player';
import { DisplayScores } from "../score/display-scores/display-scores";
import { Fakeparties } from '../../services/fakeparties';
import { Router } from '@angular/router';
@Component({
  selector: 'app-findpeople',
  imports: [Notconnected, PeopleCardFind, DisplayScores],
  templateUrl: './findpeople.html',
  styleUrl: './findpeople.css',
})
export class Findpeople {
  nameForParties = signal('');
  connexions = inject(Connexions);
  fakePlayers = inject(FakePlayer);
  fakeParties = inject(Fakeparties);
  showParties = signal(false);
  router = inject(Router);

  createMessage(e:string){
    this.connexions.findAndAddMessage(e);
  }

  toggleModalParties(e:string):void{
    if ( e != "unset")
      this.nameForParties.set(e);
    this.showParties.set(!this.showParties());
  }

  navigate(event:string):void{
    this.router.navigateByUrl(event);
  }
}
