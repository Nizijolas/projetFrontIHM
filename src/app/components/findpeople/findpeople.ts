import { Component, inject, output, signal,computed } from '@angular/core';
import { Connexions } from '../../services/connexions';
import { Notconnected } from '../notconnected/notconnected';
import { PeopleCardFind } from './people-card-find/people-card-find';
import { FakePlayer } from '../../services/fake-player';
import { DisplayScores } from "../score/display-scores/display-scores";
import { Fakeparties } from '../../services/fakeparties';
import { Router } from '@angular/router';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-findpeople',
  imports: [Notconnected, PeopleCardFind, DisplayScores, ReactiveFormsModule],
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
  filterInput = new FormControl('noFilter');
  filterSelected = signal<string>('noFilter');
  filteredPlayerInfo = computed( ()=> this.fakePlayers.fakePlayers.filter( p => {
    if ( this.filterSelected() == "noFilter")
      return true;
    else{
      return this.filterSelected() == p.niveau;
    }
  }));

  applyFilter():void{
    console.log(this.filterInput.value);
    this.filterSelected.set(this.filterInput.value == null ? "noFilter" : this.filterInput.value);
  }

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
