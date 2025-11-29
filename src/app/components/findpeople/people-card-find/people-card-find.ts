import { Component, inject, input, output } from '@angular/core';
import { NgClass } from '@angular/common';
import { OnInit } from '@angular/core';
import { Connexions } from '../../../services/connexions';
@Component({
  selector: 'app-people-card-find',
  imports: [NgClass],
  templateUrl: './people-card-find.html',
  styleUrl: './people-card-find.css',
})
export class PeopleCardFind implements OnInit{
  
  showParties = output<string>();
  src = input.required<string>();
  niveau = input.required<string>();
  age = input.required<number>();
  lieu = input.required<string>();
  bio = input.required<string>();
  note = input.required<number>();
  nbNotes = input.required<number>();
  name = input.required<string>();
  hasClickedOnButton: boolean = false;
  
  createMessage = output<string>();
  connexions = inject(Connexions);
  navigate = output<string>();
  

  
  ngOnInit(): void {
    if (this.connexions.messages.find(m => m.player?.name == this.name()) != undefined )
      this.hasClickedOnButton = true;
  }
  hasAsked(): string {
    if (this.hasClickedOnButton)
      return "notify";
    else{
      return "ask";
    }
  }

  toggleAsk(name:string):void{
    this.hasClickedOnButton = true;
    this.createMessage.emit(name);
  }
}
