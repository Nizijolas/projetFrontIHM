import { Component, inject, signal } from '@angular/core';
import { Connexions } from '../../services/connexions';
import { Notconnected } from '../notconnected/notconnected';
import { Fakeparties } from '../../services/fakeparties';
import { DisplayScores } from "./display-scores/display-scores";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
@Component({
  selector: 'app-score',
  imports: [Notconnected, DisplayScores, ReactiveFormsModule],
  templateUrl: './score.html',
  styleUrl: './score.css',
})
export class Score {
  showAddPartie = signal(false);
  connexions = inject(Connexions);
  fakeParties = inject(Fakeparties);
  nouvellePartieForm = new FormGroup({
    nomAdversaire: new FormControl('', [Validators.minLength(3), Validators.required]),
    monScoreSet1: new FormControl(0, [Validators.min(0), Validators.required]),
    sonScoreSet1: new FormControl(0, [Validators.min(0), Validators.required]),
    monScoreSet2: new FormControl(0, [Validators.min(0), Validators.required]),
    sonScoreSet2: new FormControl(0, [Validators.min(0), Validators.required]),
    monScoreSet3: new FormControl(0, [Validators.min(0), Validators.required]),
    sonScoreSet3: new FormControl(0, [Validators.min(0), Validators.required]),
  })

  onSubmit(): void {
    console.log(this.nouvellePartieForm.value);
  }

  toggleShowAddPartie():void{
    this.showAddPartie.set(!this.showAddPartie());
  }



}
