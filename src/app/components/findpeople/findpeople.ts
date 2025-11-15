import { Component, inject } from '@angular/core';
import { Connexions } from '../../services/connexions';
import { Notconnected } from '../notconnected/notconnected';
import { PeopleCardFind } from './people-card-find/people-card-find';
import { NgClass } from '@angular/common';
import { FakePlayer } from '../../services/fake-player';
@Component({
  selector: 'app-findpeople',
  imports: [Notconnected, PeopleCardFind, NgClass],
  templateUrl: './findpeople.html',
  styleUrl: './findpeople.css',
})
export class Findpeople {
  connexions = inject(Connexions);
  fakePlayers = inject(FakePlayer);

  createMessage(e:string){
    this.connexions.findAndAddMessage(e);
  }
}
