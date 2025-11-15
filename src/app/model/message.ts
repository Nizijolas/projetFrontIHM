import { inject, PlatformRef } from "@angular/core";
import { PlayerInfo } from "./player-info";
import { FakePlayer } from "../services/fake-player";

export class Message {

    player:PlayerInfo|undefined;
    listeMessages:string[] = [];

    constructor(name:string, player:PlayerInfo){
        this.player  = player;
        this.listeMessages.push("Bonjour "+player.name+" et si on jouait ensemble");
    }
}
