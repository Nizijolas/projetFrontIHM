import { Injectable } from '@angular/core';
import { Partie } from '../model/partie';
import { SetPing } from '../model/set-ping';

@Injectable({
  providedIn: 'root',
})
export class Fakeparties {
  public fakeparties: Partie[]
  
  private setWin: SetPing = new SetPing(12, 10);
  private setLoose: SetPing = new SetPing(9, 11);

  constructor() {
    this.fakeparties = [];
    this.fakeparties[0] = new Partie("gagné", this.setWin, this.setWin, this.setLoose);
    this.fakeparties[1] = new Partie("perdu", this.setLoose, this.setWin, this.setLoose);
  }
}
