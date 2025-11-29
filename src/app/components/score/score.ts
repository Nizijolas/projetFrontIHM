import { Component, inject, signal } from '@angular/core';
import { Connexions } from '../../services/connexions';
import { Notconnected } from '../notconnected/notconnected';
import { Fakeparties } from '../../services/fakeparties';
import { DisplayScores } from "./display-scores/display-scores";
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Partie } from '../../model/partie';
import { SetPing } from '../../model/set-ping';
import { Error } from "../error/error";
@Component({
  selector: 'app-score',
  imports: [Notconnected, DisplayScores, ReactiveFormsModule, Error],
  templateUrl: './score.html',
  styleUrl: './score.css',
})
export class Score {
  showAddPartie = signal(false);
  showError = signal(false);
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
    if (this.invalidScores()) {
      this.toggleShowError();
      return;
    }
    this.showError.set(false);
    let set1: SetPing = new SetPing(this.nouvellePartieForm.value.monScoreSet1 ?? 0, this.nouvellePartieForm.value.sonScoreSet1 ?? 0);
    let set2: SetPing = new SetPing(this.nouvellePartieForm.value.monScoreSet2 ?? 0, this.nouvellePartieForm.value.sonScoreSet2 ?? 0);
    let set3: SetPing = new SetPing(this.nouvellePartieForm.value.monScoreSet3 ?? 0, this.nouvellePartieForm.value.sonScoreSet3 ?? 0);

    let nouvellePartie:Partie = new Partie( set1, set2, set3, this.nouvellePartieForm.value.nomAdversaire?? "undefined");
    this.fakeParties.fakeparties.unshift(nouvellePartie);

  }

  toggleShowAddPartie(): void {
    this.showAddPartie.set(!this.showAddPartie());
    this.showError.set(false);
  }

  toggleShowError(): void {
    this.showError.set(!this.showError());
  }

  invalidScores(): boolean {
    if (this.nouvellePartieForm.value.monScoreSet1 == this.nouvellePartieForm.value.sonScoreSet1 ||
      this.nouvellePartieForm.value.monScoreSet2 == this.nouvellePartieForm.value.sonScoreSet2 ||
      this.nouvellePartieForm.value.monScoreSet3 == this.nouvellePartieForm.value.sonScoreSet3
    )
      return true;
    if ((this.nouvellePartieForm.value.monScoreSet1 ?? 0 ) < 11 && (this.nouvellePartieForm.value.sonScoreSet1 ?? 0) < 11)
      return true;
    if ((this.nouvellePartieForm.value.monScoreSet2 ?? 0) < 11 && (this.nouvellePartieForm.value.sonScoreSet2 ?? 0) < 11)
      return true;
    if ((this.nouvellePartieForm.value.monScoreSet3 ?? 0) < 11 && (this.nouvellePartieForm.value.sonScoreSet3 ?? 0) < 11)
      return true;

    return false;

  }



}
