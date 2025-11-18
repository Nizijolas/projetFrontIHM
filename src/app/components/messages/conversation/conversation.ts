import { Component, inject, input } from '@angular/core';
import { PlayerInfo } from '../../../model/player-info';
import { Connexions } from '../../../services/connexions';
import { Message } from '../../../model/message';
import { FormControl, ReactiveFormsModule } from '@angular/forms';
@Component({
  selector: 'app-conversation',
  imports: [ReactiveFormsModule],
  templateUrl: './conversation.html',
  styleUrl: './conversation.css',
})
export class Conversation {
  player = input.required<PlayerInfo>();
  connexions = inject(Connexions);
  messageForm = new FormControl("");

  getMessages(): string[] {
    let name = this.player().name;
    let message: Message | undefined = this.connexions.messages.find(m => m.player?.name == name);
    return message?.listeMessages ?? [];
  }

  addMessage():void{
    let name = this.player().name;
    let message:string = this.messageForm.value??"";
    if ( message == "")
      return
    this.connexions.messages.find(m => m.player?.name == name)?.listeMessages.push(message);
    this.messageForm.setValue("");
  }
}
