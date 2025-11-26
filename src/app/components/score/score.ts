import { Component, inject } from '@angular/core';
import { Connexions } from '../../services/connexions';
import { Notconnected } from '../notconnected/notconnected';
@Component({
  selector: 'app-score',
  imports: [Notconnected],
  templateUrl: './score.html',
  styleUrl: './score.css',
})
export class Score {
  connexions = inject(Connexions);
  
}
