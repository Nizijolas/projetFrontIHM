import { Component, input } from '@angular/core';
import { Partie } from '../../../model/partie';

@Component({
  selector: 'app-display-scores',
  imports: [],
  templateUrl: './display-scores.html',
  styleUrl: './display-scores.css',
})
export class DisplayScores {
  parties = input.required<Partie[]>();
}
