import { Component, inject, Signal, signal } from '@angular/core';
import { Connexions } from '../../services/connexions';
import { Notconnected } from '../notconnected/notconnected';
import { Conversation } from "./conversation/conversation";
import { PlayerInfo } from '../../model/player-info';
import { OnInit } from '@angular/core';
import { NgClass } from '@angular/common';
import { RouterLink } from "@angular/router";
@Component({
  selector: 'app-messages',
  imports: [Notconnected, Conversation, NgClass, RouterLink],
  templateUrl: './messages.html',
  styleUrl: './messages.css',
})
export class Messages implements OnInit {

  connexions = inject(Connexions);
  actualPlayer = signal(PlayerInfo.undefined)

  ngOnInit(): void {
    if (this.connexions.messages.length > 0)
      this.actualPlayer.set(this.connexions.messages[0].player ?? PlayerInfo.undefined);
  }

  setNew(name: string) {
    this.actualPlayer.set(
      this.connexions.messages.find(m => m.player?.name == name)?.player ?? PlayerInfo.undefined
    )
  }
}
