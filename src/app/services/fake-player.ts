import { Injectable } from '@angular/core';
import { PlayerInfo } from '../model/player-info';

@Injectable({
  providedIn: 'root',
})
export class FakePlayer {
  public fakePlayers: PlayerInfo[] = [];

  constructor() {


    this.fakePlayers[0] = new PlayerInfo(
      "Léa",
      "lea.png",
      "Passionnée de tennis, joue depuis 5 ans",
      "Intermédiaire",
      "Saint-Martin-d'Hères",
      27,
      4.3,
      19
    );

 

    this.fakePlayers[1] = new PlayerInfo(
      "Lucas",
      "lucas.png",
      "Joueur enthousiaste, disponible en semaine et week-end",
      "Intermédiaire",
      "Échirolles",
      26,
      4.0,
      12
    );

    this.fakePlayers[2] = new PlayerInfo(
      "Sophie",
      "sophie.png",
      "Joueuse régulière en club, participe à des tournois locaux",
      "Avancé",
      "Meylan",
      29,
      4.6,
      27
    );

    this.fakePlayers[3] = new PlayerInfo(
      "Thomas",
      "thomas.png",
      "Ancien joueur universitaire, aime les matchs compétitifs",
      "Avancé",
      "Grenoble",
      32,
      4.7,
      23
    );

  }
}
