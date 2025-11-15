import { Component, input } from '@angular/core';
import { NgClass } from '@angular/common';
@Component({
  selector: 'app-people-card-find',
  imports: [NgClass],
  templateUrl: './people-card-find.html',
  styleUrl: './people-card-find.css',
})
export class PeopleCardFind {
  src = input.required<string>();
  niveau = input.required<string>();
  age = input.required<number>();
  lieu = input.required<string>();
  bio = input.required<string>();
  note = input.required<number>();
  nbNotes = input.required<number>();
  name = input.required<string>();
  hasClickedOnButton: boolean = false;

  hasAsked(): string {

    if (this.hasClickedOnButton)
      return "notify";
    else{
      return "ask";
    }
  }

  toggleAsk():void{
    this.hasClickedOnButton = true;
  }
}
