import { PlayerInfo } from "./player-info";
import { SetPing } from "./set-ping";

export class Partie {
    resultat: string;
    adversaire: PlayerInfo;
    sets: SetPing[];

    constructor(resultat: string, set1: SetPing, set2: SetPing, set3: SetPing, adversaire: PlayerInfo) {
        if (resultat != "gagné" && resultat != "perdu")
            console.error("PB resultat");

        this.resultat = resultat;
        this.sets = [];
        this.sets[0] = set1;
        this.sets[1] = set2;
        this.sets[2] = set3;

        this.adversaire = adversaire;
    }
}
