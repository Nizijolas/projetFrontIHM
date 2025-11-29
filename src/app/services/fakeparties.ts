import { inject, Injectable } from '@angular/core';
import { Partie } from '../model/partie';
import { SetPing } from '../model/set-ping';

@Injectable({
  providedIn: 'root',
})
export class Fakeparties {
  public fakeparties: Partie[];
  public fakepartiesForFakePlayers:Partie[];
  private setWin: SetPing = new SetPing(12, 10);
  private setLoose: SetPing = new SetPing(9, 11);

  constructor() {
    this.fakeparties = [];
    this.fakeparties[0] = new Partie( this.setWin, this.setWin, this.setLoose, "Paolo");
    this.fakeparties[1] = new Partie(this.setLoose, this.setWin, this.setLoose, "Léa");
    this.fakepartiesForFakePlayers = [];
    this.fakepartiesForFakePlayers[0] = new Partie(this.setWin, this.setWin, this.setLoose, "Bernardo");
    this.fakepartiesForFakePlayers[1] = new Partie(this.setLoose, this.setWin, this.setLoose, "Clara");
  }
}
