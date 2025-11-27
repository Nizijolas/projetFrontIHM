import { PlayerInfo } from "./player-info";
import { SetPing } from "./set-ping";

export class Partie {
    public adversaire: string;
    public sets: SetPing[];

    constructor( set1: SetPing, set2: SetPing, set3: SetPing, adversaire: string) {


        this.sets = [];
        this.sets[0] = set1;
        this.sets[1] = set2;
        this.sets[2] = set3;

        this.adversaire = adversaire;
    }

    won():boolean{
      return this.sets.filter( s => s.won()).length >= 2;
    }
}
