import { Component, input, signal } from '@angular/core';
import { Editionmenu } from '../editionmenu/editionmenu';
@Component({
  selector: 'app-profile-card',
  imports: [Editionmenu],
  templateUrl: './profile-card.html',
  styleUrl: './profile-card.css',
})
export class ProfileCard {
  user = input.required<string>();
  showEdit:boolean = false;

  toggleShowEdit():void{
    this.showEdit = !this.showEdit;
  }
}
