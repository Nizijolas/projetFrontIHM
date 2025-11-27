import { Component, inject } from '@angular/core';
import { Connexions } from '../../services/connexions';
import { Notconnected } from '../notconnected/notconnected';
import { Fakeparties } from '../../services/fakeparties';
import { DisplayScores } from "./display-scores/display-scores";
@Component({
  selector: 'app-score',
  imports: [Notconnected, DisplayScores],
  templateUrl: './score.html',
  styleUrl: './score.css',
})
export class Score {
  connexions = inject(Connexions);
  fakeParties = inject(Fakeparties);
  
}
